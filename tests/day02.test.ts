import { day02a } from '../src/day02';

test("Day02 Part 1", () => {
  const cheatSheet = ['A Y', 'B X', 'C Z'];
  expect(day02a(cheatSheet)).toBe(15);
});
