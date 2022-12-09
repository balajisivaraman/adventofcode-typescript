import { day06 } from '../src/day06';

test("Day06 Part 1", () => {
  const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
  expect(day06(input, 4)).toBe(7);
});

test("Day06 Part 2", () => {
  const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
  expect(day06(input, 14)).toBe(19);
});
