# Basic HTML MEAN seed

This is a seed project that uses HTML instead of Jade or EJS, that is frequently used by most of front-end devs.
Additionally, it uses Bower, Grunt and Material Angular.

## How to use basic-html-mean-seed

Clone the basic-html-mean-seed repository, run `npm install && bower install` to grab the dependencies, and start the party!

### Bower dependencies
-->  angular: "~1.4.7",
-->  angular-route: "~1.4.7",
-->  angular-material: "~0.11.4"

### Running the app

To run the app, 
    ```
    node app.js
    ```

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
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
    