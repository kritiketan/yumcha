const siteList = require('./site-list.js').siteList;

module.exports.getUrl = 
() => siteList[ Math.floor(Math.random() * siteList.length ) ]



