#!/usr/bin/env node
'use strict';
var meow = require('meow');

meow([
	'Usage',
	'  $ clear'
]);

process.stdout.write('\u001bc');
