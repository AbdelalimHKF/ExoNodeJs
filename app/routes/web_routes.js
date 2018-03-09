const express = require('express');
const path    = require("path");


module.exports = function(app) {

    app.get('/index.html', (req, res) => {
        res.sendFile(path.join(__dirname+'../../../web/index.html'));
    });

    app.get('/angular.js', (req, res) => {
        res.sendFile(path.join(__dirname+'../../../web/angular.js'));
    });

    app.get('/exo_app.js', (req, res) => {
        res.sendFile(path.join(__dirname+'../../../web/exo_app.js'));
    });

    app.get('/style.css', (req, res) => {
        res.sendFile(path.join(__dirname+'../../../web/style.css'));
    });
};