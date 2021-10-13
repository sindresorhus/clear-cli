#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import ansiEscapes from 'ansi-escapes';

meow(`
	Usage
	  $ clear
`, {
	importMeta: import.meta,
});

process.stdout.write(ansiEscapes.clearScreen);
