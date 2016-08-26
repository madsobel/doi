describe('DOI Test Suite', () => {
  const doi = require('../src/doi.js');

  beforeEach(() => {
    spyOn(console, 'log');
    spyOn(console, 'error');
  });

  it('should find "doi" as instantiated', () => {
    expect(doi).toBeDefined();
    expect(doi).not.toBeUndefined();
  });

  it('should find whois data for google.com', (done) => {
    doi.whois('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not support the TLD "foobar"', (done) => {
    doi.whois('google.foobar', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find a hostname for 8.8.8.8', (done) => {
    doi.host('8.8.8.8', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find a hostname for 192.168.0.0', (done) => {
    doi.host('192.168.0.0', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find nameservers for google.com', (done) => {
    doi.nameserver('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find nameservers for icertaintydonthopethisdomainexists.com', (done) => {
    doi.nameserver('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find A records for google.com', (done) => {
    doi.arecord('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find A records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.arecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find AAAA records for google.com', (done) => {
    doi.aaaarecord('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find AAAA records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.aaaarecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find MX records for google.com', (done) => {
    doi.mxrecord('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find MX records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.mxrecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find TXT records for google.com', (done) => {
    doi.txtrecord('google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find TXT records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.txtrecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

  it('should find SRV records for _xmpp-server._tcp.gmail.com', (done) => {
    doi.srvrecord('_xmpp-server._tcp.gmail.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find SRV records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.srvrecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

    it('should find CNAME records for mail.google.com', (done) => {
    doi.cnamerecord('mail.google.com', () => {
      expect(console.log).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not find CNAME records for icertaintydonthopethisdomainexists.com', (done) => {
    doi.cnamerecord('icertaintydonthopethisdomainexists.com', () => {
      expect(console.error).toHaveBeenCalled();
      expect(console.log).not.toHaveBeenCalled();
      done();
    });
  });

});