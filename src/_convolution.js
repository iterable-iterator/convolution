import {_window} from '@iterable-iterator/window';
import {_chain} from '@iterable-iterator/chain';
import {nrepeat} from '@iterable-iterator/repeat';
import {map, starmap} from '@iterable-iterator/map';
import {_zip2} from '@iterable-iterator/zip';
import {reduce} from '@iterable-iterator/reduce';

/**
 * _convolution.
 *
 * @param {Array} rKernel
 * @param {Iterable} signal
 * @return {IterableIterator}
 */
const _convolution = (rKernel, signal, {add, mul, zero}) => {
	const n = rKernel.length;
	return map(
		(slidingWindow) => reduce(add, starmap(mul, _zip2(rKernel, slidingWindow))),
		_window(n, _chain([nrepeat(zero, n - 1), signal, nrepeat(zero, n - 1)])),
	);
};

export default _convolution;
