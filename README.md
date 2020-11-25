# Web.Academy Core-Library

Collection of core functionality

## Helpers

### ArrayHelper

#### ArrayHelper.chunk(arr: any[], size: number): any[][]

Splits an existing array into multiple arrays (chunks) with a given size.
```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let chunks = ArrayHelper.chunk(arr, 3);

// ==> chunks = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']];

```


#### ArrayHelper.randomItem(arr: any[]): any

Returns a random item from given array

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let item = ArrayHelper.randomItem(arr);
```
