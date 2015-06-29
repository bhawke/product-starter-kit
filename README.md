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
$ gulp serve --template 1
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.  Passing in --template [num] will serve the app from the directory app-template-[num] .  If you prefer, you
can modify the psk.appDir variable in package.json .

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

## Google Analytics
To setup [google analytics](https://www.google.com/analytics) and begin tracking metrics:
1. Request access to the company google analytics account
2. In the analytics account administration, add a new "Property" from Admin section and add the url to the page deployed to github pages.
3. After you create the property, copy the javascript code from the ".js Tracking Info" on the GA site.
4. Paste the javascript at the bottom of the index.html page.  There should already be an existing one in the template so replace it.
5. Validate it is working by going to the Google Analytics -> Reporting -> Real Time -> Overview .  Make sure you first select the new property from the Home screen.  Refresh the page deployed to github pages a few times to see activity.

## Custom Domain URL
1. Register domain name through GoDaddy.  Send email to GoDaddy administrator with domain you want to register. [GoDaddy Instructions](http://andrewsturges.com/blog/jekyll/tutorial/2014/11/06/github-and-godaddy.html)
2. Edit app/CNAME and replace with the new registered domain name 
3. Deploy to github pages ```$ gulp deploy ``` 

## Trademarks
[Howto] (docs/trademarks.md)

## Credit
This starter kit was derived from [Polymer Starter Kit] (https://developers.google.com/web/tools/polymer-starter-kit/).  Keep this project in sync with it as it contains best practices for cross browser + cross platform.
