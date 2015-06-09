## Product Starter Kit

> A starting point for launching new products and testing market hypothesis

## Getting Started

To take advantage of Product Starter Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

## Getting the code

[Download](https://github.com/bhawke/product-starter-kit/releases/latest) and extract Product Starter Kit to where you want to work.

### Install dependencies

With [Node.js](http://nodejs.org) and npm installed, run the following one liner from the root of your Product Starter Kit download:

```sh
$ npm install -g gulp && npm install -g bower && npm install && bower install
```

This will install the element sets (Paper, Iron, Platinum) and tools
we will use to serve and build the kit.

### Serve / watch

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

### Build For Production

```sh
$ gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

### Deploy to github pages
```sh
$ gulp deploy
```

Deploy the site to github pages.  This assumes you have created a new repository in github and checked in all files.

## Application Theming

Modify the theme variables in `app/elements/app-theme.html` .  Use [Material Palette](http://www.materialpalette.com/) for different theme combinations.

## Custom Domain URL
1. Register domain name through GoDaddy.  Send email to GoDaddy administrator with domain you want to register. [GoDaddy Instructions](http://andrewsturges.com/blog/jekyll/tutorial/2014/11/06/github-and-godaddy.html)
2. Edit app/CNAME and replace with the new registered domain name 
3. Deploy to github pages ```$ gulp deploy ``` 

## TODO
* Create proper landing page
* Add documentation to point a custom domain to the project page
* Include google analytics
* Include feedback capabilities (firebase to store date???)


## Credit
This starter kit was derived from [Polymer Starter Kit] (https://developers.google.com/web/tools/polymer-starter-kit/)
