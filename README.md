# DOI (Doimain information)

DOI is a stronger and neater interface to get domain and IP information through. It takes the best from known CLI tools such as `dig`, `host`, `whois` and `nslookup` and bundles it up into one tool.

## Installation
DOI requires [Node.js](https://nodejs.org/en/) to run. And works on Windows, macOS or Linux.

Install by running:

`npm install -g doi`

## Usage
DOI only works in the commandline as of now.

`doi [opions] <domain or ip>`

Example: `doi -A google.com` will get the IPv6 addresses of google.com

For more help and docs run `doi --help`

## Contributing
If you wan't to help out with DOI, you're more than welcome!

Get started in a jiff:

- `git clone https://github.com/madsobel/doi.git`
- `cd doi`
- `npm install`
- `npm install -g`

### Runnnig tests
DOI uses [Jasmine](http://jasmine.github.io/) to execute tests. Currently DOI has a total of `19` tests.

Tests can be executed by running `jasmine` or `npm test`