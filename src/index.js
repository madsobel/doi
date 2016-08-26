#!/usr/bin/env node
const program = require('commander');
const doi = require('./doi.js');

program.arguments('<domain>')
  .option('-w, --whois', 'Will fetch the raw whois for the domain provided')
  .option('-h, --host', 'Will fetch the hostname for a IPv4 or IPv6 address provided')
  .option('-a, --arecord', 'Will fetch the A record for the domain provided')
  .option('-A, --aaaarecord', 'Will fetch the AAAA record for the domain provided')
  .option('-m, --mxrecord', 'Will fetch the MX record for the domain provided')
  .option('-t, --txtrecord', 'Will fetch the TXT record for the domain provided')
  .option('-s, --srvrecord', 'Will fetch the SRV record for the domain provided')
  .option('-n, --nameserver', 'Will fetch the nameservers for the domain provided')
  .option('-c, --cnamerecord', 'Will fetch the CNAME record for the domain provided')
  .action((domain) => {
    for (var i in doi) {
      if (program[i]) {
        doi[i](domain);
      }
    }
  })
  .parse(process.argv);