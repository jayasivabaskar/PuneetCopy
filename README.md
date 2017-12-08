# reactforcts

    Coverage
        JS
            - Loosely typed
            - Not fully Object oriented
            - Protypal language
            - Primitive types: numbers, string, boolean
            - Function are first class object
            - Function can be passed as params and returned
            - Function scope - each function gets its own scope. A property in inner function can hide the outer function property.
        DOM manipulation
            Tree structure
        JQuery
            A library of reusable functions
            $('#').html()
        React
            DOM manipulation is optimised
            Creation a Reactive elements:
                - Create component class
                - create instance from class
                - Render to DOM
        NodeJS
            NPM - Way to get Node packages
            Http-server: Static web server
            Gulp: Streaming build system
    NPM Commands
        1. To check version, node --version
        2. To set proxy: npm config set https-proxy http://proxy.company.com:8080
        3. To install a package: npm install module-name
        4. To create package configuration: npm init
        5. Create scripts: "start": "http-server"

        Creating builds
            Gulp: 
                Transcompilation using gulp-babel
                Concatination using gulp-concat

