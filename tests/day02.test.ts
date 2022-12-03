import { day02a, day02b } from '../src/day02';

test("Day02 Part 1", () => {
  const cheatSheet = ['A Y', 'B X', 'C Z'];
  expect(day02a(cheatSheet)).toBe(15);
});

test("Day02 Part 2", () => {
  const cheatSheet = ['A Y', 'B X', 'C Z'];
  expect(day02b(cheatSheet)).toBe(12);
});
