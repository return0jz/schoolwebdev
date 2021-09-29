let main;

if (process.env.NODE_ENV == "production") {
    main = require('./src/production');
    console.log("Started production server");
} else {
    main = require('./src/dev');
    console.log("Started development server");
}

main();