# Build Journal

## Domain Name
- bought `carolineandcody.com` from Google Domains
- added a CNAME (canonical name record) file to the repo (the `gh-pages` branch). A CNAME
  file is a resource record in DNS which specifies a domain name as an alias for another
  domain (the canonical domain). Always points to a domain name, never an IP. I think
  this makes the github URL an alias for the domain I bought which in turn (see below)
  fetches content from github.

- Set up custom resource records in Google Domains to point the domain at the webserver.
- Apparently takes anywhere between 1 and 48 hours for changes to be reflected.
- http://www.carolineandcody.com
- http://carolineandcody.com
- https://ccann.github.io/hitched/ should redirect

The Google Domains should be set up as follows:

``` text
www    CNAME    1h    ccann.github.io     (it will add a trailing period)
@      A        1h    192.30.252.154
                      192.30.252.153      (Github IPs)
```

even though the project url is ccann.github.io/hitched, the path is unnecessary as the
CNAME file should handle it.

### Resources

- https://medium.com/@Tnylnc/tnylnc-how-to-set-up-github-pages-with-google-domains-83bd5a4fbc5c
- https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b
- https://medium.com/@jeauxcal/so-you-bought-a-google-domain-name-now-what-5fd72dffe370
- http://blog.dnedveck.com/google-domains/github/github-pages/2016/01/10/GitHub-Pages-and-Google-Domains.html


### Deploying

on branch `gh-pages`:

``` bash
lein do clean, cljsbuild once min
cp -r resources/public/images . && cp -r resources/public/css . && cp -r target/pages/resources/public/js/ js/
```

### Development

on `master`:

``` bash
lein figwheel
```
