const express = require('express');
const path = require('path');
const routes = require('./api_routes/api_routes')

const port = process.env.PORT || 3001

module.exports = function() {
    let app = express();
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}