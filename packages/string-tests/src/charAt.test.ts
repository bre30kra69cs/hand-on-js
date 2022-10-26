describe('charAt', () => {
  test('empty', () => {
    expect(''.charAt(-1)).toEqual('');
    expect(''.charAt(0)).toEqual('');
    expect(''.charAt(1)).toEqual('');
    expect(''.charAt(1.1)).toEqual('');
    expect(''.charAt(2.2222)).toEqual('');
    expect(''.charAt(2.6)).toEqual('');
    expect(''.charAt(2.9999)).toEqual('');
    expect(''.charAt(NaN)).toEqual('');
    expect(''.charAt(Infinity)).toEqual('');
    expect(''.charAt(-Infinity)).toEqual('');
  });

  test('valid', () => {
    expect('example'.charAt(-1)).toEqual('');
    expect('example'.charAt(0)).toEqual('e');
    expect('example'.charAt(1.1)).toEqual('x');
    expect('example'.charAt(2.2222)).toEqual('a');
    expect('example'.charAt(2.6)).toEqual('a');
    expect('example'.charAt(2.9999)).toEqual('a');
    expect('example'.charAt(NaN)).toEqual('e');
    expect('example'.charAt(Infinity)).toEqual('');
    expect('example'.charAt(-Infinity)).toEqual('');
  });
});
