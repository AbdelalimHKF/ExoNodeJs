const express = require('express');
const path    = require("path");

const jeu = {
    "question":"Aimez-vous Angular ?" ,
	"goodResp": "Bon choix !",
	"badResp": "Zut !"
}

module.exports = function(app) {

    app.get('/jeu', (req, res) => {
        res.send(jeu)
    });

};