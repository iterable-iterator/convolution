:bar_chart: [@iterable-iterator/convolution](https://iterable-iterator.github.io/convolution)
==

Iterable convolution for JavaScript.
See [docs](https://iterable-iterator.github.io/convolution/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {convolution} from '@iterable-iterator/convolution';

const moving_average = [1/4, 1/4, 1/4, 1/4];
convolution(moving_average, signal); // ...

const first_derivative = [1, -1];
convolution(first_derivative, signal); // ...

const second_derivative = [1, -2, 1];
convolution(second_derivative, signal); // ...
```

[![License](https://img.shields.io/github/license/iterable-iterator/convolution.svg)](https://raw.githubusercontent.com/iterable-iterator/convolution/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/convolution.svg)](https://www.npmjs.org/package/@iterable-iterator/convolution)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/convolution/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/convolution/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/iterable-iterator/convolution.svg)](https://david-dm.org/iterable-iterator/convolution)
[![Dev dependencies](https://img.shields.io/david/dev/iterable-iterator/convolution.svg)](https://david-dm.org/iterable-iterator/convolution?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/convolution.svg)](https://github.com/iterable-iterator/convolution/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/convolution.svg)](https://www.npmjs.org/package/@iterable-iterator/convolution)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/convolution.svg)](https://codeclimate.com/github/iterable-iterator/convolution/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/convolution.svg)](https://codeclimate.com/github/iterable-iterator/convolution/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/convolution/main.svg)](https://codecov.io/gh/iterable-iterator/convolution)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/convolution.svg)](https://codeclimate.com/github/iterable-iterator/convolution/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/convolution/badge.svg)](https://iterable-iterator.github.io/convolution/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/convolution)](https://bundlephobia.com/result?p=@iterable-iterator/convolution)
