import {bubbleSort} from './bubble.sort';

describe('bubbleSort', () => {
  test('empty', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('valid uniq', () => {
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([-1])).toEqual([-1]);
    expect(bubbleSort([0])).toEqual([0]);
    expect(bubbleSort([0.1])).toEqual([0.1]);
    expect(() => bubbleSort([NaN])).toThrow();
    expect(() => bubbleSort([Infinity])).toThrow();
    expect(() => bubbleSort([-Infinity])).toThrow();
    expect(bubbleSort([1, 0, -1])).toEqual([-1, 0, 1]);
    expect(bubbleSort([1, 0, -1, 0.8])).toEqual([-1, 0, 0.8, 1]);
  });

  test('valid repeated', () => {
    expect(bubbleSort([1, 1])).toEqual([1, 1]);
    expect(bubbleSort([1, 0, -1, 0])).toEqual([-1, 0, 0, 1]);
    expect(bubbleSort([1, 0, -1, 0.8, -1])).toEqual([-1, -1, 0, 0.8, 1]);
  });
});
