import test from 'ava';

import {list} from '@iterable-iterator/list';
import {count} from '@iterable-iterator/count';
import {take} from '@iterable-iterator/slice';
import {convolution} from '#module';

test('https://betterexplained.com/articles/intuitive-convolution/#Part_1_Hospital_Analogy single-day treatment', (t) => {
	const signal = [1, 2, 3, 4, 5];
	const kernel = [3];
	const result = list(convolution(kernel, signal));
	const expected = [3, 6, 9, 12, 15];
	t.deepEqual(result, expected);
});

test('https://betterexplained.com/articles/intuitive-convolution/#Part_1_Hospital_Analogy multi-day treatment', (t) => {
	const signal = [1, 2, 3, 4, 5];
	const kernel = [3, 2, 1];
	const result = list(convolution(kernel, signal));
	const expected = [3, 8, 14, 20, 26, 14, 5];
	t.deepEqual(result, expected);
});

test('derivative of unit slope', (t) => {
	const signal = count();
	const kernel = [1, -1];
	const result = list(take(convolution(kernel, signal), 5));
	const expected = [0, 1, 1, 1, 1];
	t.deepEqual(result, expected);
});
