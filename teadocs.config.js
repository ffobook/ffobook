'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "FFO 幻想目录",
        description: "QQ自由幻想（FFO）百科全书之幻想目录",
        version: "0.0.1",
        dir: "./docs",
        outDir: "./build",
        staticDir: "./static"
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}