#!/usr/bin/env node
'use strict'
const sip = require('./util').getUrl;

function usage() {
  let welcomeMessage = 
  '\n Yumcha is a chinese tradition involving tea and snacks (usually dimsum).'
  + '\n The western world equivalent of a coffee break.'
  + '\n When life was not just a bridge from one lockdown to another,'
  + '\n I for one used to enjoy coffee breaks with colleagues a LOT.'
  + '\n Those breaks now involve, browsing through deep recesses of the internet/'
  + '\n which in most cases are useless.'
  + '\n So here are some of the most useless websites for your coffee (Productivity) breaks'

  console.log('Usage:');
  console.log('  yumcha');
  console.log('  yumcha --help');
  console.log(welcomeMessage);
}

const args = process.argv.slice(2);

if (args.indexOf('--help') >= 0) {
  usage();
  process.exit(0);
}else{
  console.log(sip())
}

