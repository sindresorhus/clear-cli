import test from 'ava';
import execa from 'execa';

global.Promise = Promise;

test(async t => {
	t.is((await execa('./cli.js')).stdout, '\u001bc');
});
