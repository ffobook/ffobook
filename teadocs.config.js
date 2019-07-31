'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "FFO蓝皮书",
        description: "QQ自由幻想游戏蓝皮书手册",
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