import {_window} from '@iterable-iterator/window';
import {_chain} from '@iterable-iterator/chain';
import {nrepeat} from '@iterable-iterator/repeat';
import {list} from '@iterable-iterator/list';
import {reversed} from '@iterable-iterator/reversed';
import {map, starmap} from '@iterable-iterator/map';
import {mul} from '@functional-abstraction/operator';
import {_zip2} from '@iterable-iterator/zip';
import {sum} from '@iterable-iterator/reduce';

const convolution = (kernel, signal) => {
	const rKernel = list(reversed(kernel));
	const n = rKernel.length;
	return map(
		(slidingWindow) => sum(starmap(mul, _zip2(rKernel, slidingWindow))),
		_window(n, _chain([nrepeat(0, n - 1), signal, nrepeat(0, n - 1)])),
	);
};

export default convolution;
