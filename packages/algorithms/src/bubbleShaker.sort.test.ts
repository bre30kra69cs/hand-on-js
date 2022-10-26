import {bubbleShaker} from './bubbleShaker.sort';

describe('bubbleShaker', () => {
  test('empty', () => {
    expect(bubbleShaker([])).toEqual([]);
  });

  test('valid uniq', () => {
    expect(bubbleShaker([1])).toEqual([1]);
    expect(bubbleShaker([-1])).toEqual([-1]);
    expect(bubbleShaker([0])).toEqual([0]);
    expect(bubbleShaker([0.1])).toEqual([0.1]);
    expect(() => bubbleShaker([NaN])).toThrow();
    expect(() => bubbleShaker([Infinity])).toThrow();
    expect(() => bubbleShaker([-Infinity])).toThrow();
    expect(bubbleShaker([1, 0, -1])).toEqual([-1, 0, 1]);
    expect(bubbleShaker([1, 0, -1, 0.8])).toEqual([-1, 0, 0.8, 1]);
  });

  test('valid repeated', () => {
    expect(bubbleShaker([1, 1])).toEqual([1, 1]);
    expect(bubbleShaker([1, 0, -1, 0])).toEqual([-1, 0, 0, 1]);
    expect(bubbleShaker([1, 0, -1, 0.8, -1])).toEqual([-1, -1, 0, 0.8, 1]);
  });
});
