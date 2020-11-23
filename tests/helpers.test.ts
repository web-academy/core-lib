import {ArrayHelper} from "../src";

test('ArrayHelper.chunk', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const expected = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']];
    expect(ArrayHelper.chunk(arr, 3)).toEqual(expected);
});

test('ArrayHelper.median', () => {
    const arr = [1, 2, 3, 10, 20, 30, 40];
    expect(ArrayHelper.median(arr)).toBe(10);
});

test('ArrayHelper.average', () => {
    const arr = [8, 4, 2, 6, 8, 10, 11];
    expect(ArrayHelper.average(arr)).toBe(7);
});

test('ArrayHelper.mergeChunks', () => {
    const arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']];
    const expected  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    expect(ArrayHelper.mergeChunks(arr)).toEqual(expected);
});
