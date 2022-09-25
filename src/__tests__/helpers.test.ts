import { trunc } from '../utils/helpers';

describe('trunc', () => {
  let str =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt itaque consectetur quidem porro! Quasi cupiditate, totam dicta quos dolores blanditiis, tenetur vero reiciendis eligendi unde itaque sequi? Consectetur, temporibus dicta!';
  let number = Math.floor(Math.random() * 210);

  test('correct value', () => {
    expect(trunc(str, number)).toBe(trunc(str, number));
    expect(trunc('123231', 29)).toBe(trunc('123231', 29));
    expect(trunc(str, number)).not.toBeNull();
    expect(trunc(str, number)).not.toBeUndefined();
  });

  test('length < 0', () => {
    expect(trunc(str, -1)).toBe(str);
  });

  test('if length > str.lenght', () => {
    expect(trunc('hello world', 32)).toBe('hello world');
  });
});
