/**
 *
 * Worst time   n**2
 * Average time n**2
 * Best time    n
 * Memory       1
 */
export const bubbleSort = (value: number[]) => {
  if (!value.length) {
    return value;
  }

  for (const i of value) {
    if (isNaN(i) || !Number.isFinite(i)) {
      throw new Error('Unvalid value');
    }
  }

  for (let i = 0; i <= value.length - 1; i += 1) {
    for (let y = 0; y <= value.length - 2 - i; y += 1) {
      const left = value[y];
      const right = value[y + 1];

      if (left > right) {
        value[y] = right;
        value[y + 1] = left;
      }
    }
  }

  return value;
};
