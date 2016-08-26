const dns = require('dns');
const net = require('net');
const chalk = require('chalk');
const tlds = require('./servers.json');

module.exports = {
  whois: function(domain, cb) {
    this.resolveWhois(domain, cb);
  },
  host: function(address, cb) {
    dns.reverse(address, (err, hostnames) => {
      if (err) {
        console.error(chalk.red.bold('Oh noes! Something went wrong. Maybe the IP', address, 'is not valid?'));
      } else {
        console.log(chalk.blue.bold('Found', hostnames.length,'Hostname(s) for', address));
        for (var i = 0; i < hostnames.length; i++) {
          console.log(chalk.green(hostnames[i]));
        }
      }
      this.doCallback(cb);
    });
  },
  nameserver: function(domain, cb) {
    this.resolveRecord(domain, 'NS', cb);
  },
  arecord: function(domain, cb) {
    this.resolveRecord(domain, 'A', cb);
  },
  aaaarecord: function(domain, cb) {
    this.resolveRecord(domain, 'AAAA', cb);
  },
  mxrecord: function(domain, cb) {
    this.resolveRecord(domain, 'MX', cb);
  },
  txtrecord: function(domain, cb) {
    this.resolveRecord(domain, 'TXT', cb);
  },
  srvrecord: function(domain, cb) {
    this.resolveRecord(domain, 'SRV', cb);
  },
  cnamerecord: function(domain, cb) {
    this.resolveRecord(domain, 'CNAME', cb);
  },
  resolveRecord: function(domain, recordType, cb) {
    dns.resolve(domain, recordType, (err, addresses) => {
      if (err) {
      	 console.error(chalk.red.bold('Oh noes! Something went wrong. Maybe the domain', domain, 'does not exsist?'));
         console.error(chalk.red.bold('.. Or, it does not have the requested record'));
         this.doCallback(cb);
       } else {
         this.displayRecords(domain, recordType, addresses, cb);
       }
    });
  },
  displayRecords: function(domain, recordType, data, cb) {
    console.log(chalk.blue.bold('Found', data.length, recordType, 'Record(s) for', domain));
    for (var i = 0; i < data.length; i++) {
      console.log(chalk.green(recordType, data[i]));
    }
    this.doCallback(cb);
  },
  resolveWhois: function(domain, cb) {
    const tld = this.getTld(domain);
    if (tlds.hasOwnProperty(tld)) {
      const nicServer = tlds[tld].nic;

      const socket = net.createConnection(43, nicServer, () => {
        socket.write(domain + '\r\n', 'ascii');
      });

      socket.setEncoding('ascii');

      socket.on('data', (response) => {
        console.log(chalk.green.bold('This is what I found for', domain));
        console.log(response);
      });

      socket.on('close', () => {
        this.doCallback(cb);
      });
    } else {
      console.error(chalk.red.bold('TLD not supported'));
      this.doCallback(cb);
    }
  },
  getTld: function(domain) {
    return domain.split(/\.(.+)?/)[1];
  },
  doCallback: function(cb) {
    if (typeof cb === 'function') {
      cb();
    }
  }
};
