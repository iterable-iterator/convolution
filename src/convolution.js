import {add, mul} from '@functional-abstraction/operator';
import {list} from '@iterable-iterator/list';
import {reversed} from '@iterable-iterator/reversed';

import _convolution from './_convolution.js';

/**
 * Convolution.
 *
 * @param {Iterable} kernel
 * @param {Iterable} signal
 * @return {IterableIterator}
 */
const convolution = (kernel, signal) =>
	_convolution(list(reversed(kernel)), signal, {add, mul, zero: 0});

export default convolution;
