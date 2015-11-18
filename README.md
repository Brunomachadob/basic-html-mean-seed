# Basic HTML MEAN seed

This is a seed project that uses HTML instead of Jade or EJS, that is frequently used by most of front-end devs.
Additionally, it uses Bower, Grunt and Material Angular.

## How to use basic-html-mean-seed

Clone the basic-html-mean-seed repository, run `npm install && bower install` to grab the dependencies, and start the party!

### Dependencies

It depends on
```
-->  grunt
-->  bower
-->  karma
```

### Bower dependencies
```
-->  angular: "~1.4.7",
-->  angular-route: "~1.4.7",
-->  angular-material: "~0.11.4"
```

### Grunt tasks

**default task,**
```
grunt 
```
Initially this task will call the build task, but feel free to personalize it.

**To build the application,**
```
grunt build
```

This task will lint your javascripts from client and server,
compile your **less** files,
convert your **tpl.html** templates to **javascript**,
minify and concat your **client scripts** and **css**
and run the unit tests.

**To test the app**
```
grunt test
```

This task will run the unit tests of the app

**To run the app,**
```
grunt serve
```

This task will start the server with watch on your styles and scripts.

**To build and run**
```
grunt dev
```

This task will run the **default** and **serve** tasks


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    bower.json          --> for bower
    Gruntfile.js        --> for grunt
    karma.conf.js       --> for karma
    typings/            --> for VSCode
    dist/               --> Where your projects file will be after the build task
    public/             --> all of the files to be used in on the client side
      assets/           --> app assets
        css/              --> css files
          app.css         --> default stylesheet
        img/              --> image files
      scripts/               --> javascript files
        app.module.js          --> declare top-level app module
        app.controller.js      --> application controller
        partial1.controller.js   --> demo controller 
        partial2.controller.js   --> demo controller
        components/            --> app components directory
        services/              --> app components directory
      views/
        index.html        --> main page for app
        partials/         --> angular view partials (partial jade templates)
            partial1.html
            partial2.html
    server/    
        routes/
        api.js            --> route for serving JSON
        index.js          --> route for serving HTML pages and partials
    