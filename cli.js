#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ansiEscapes = require('ansi-escapes');

meow([
	'Usage',
	'  $ clear'
]);

process.stdout.write(ansiEscapes.clearScreen);
