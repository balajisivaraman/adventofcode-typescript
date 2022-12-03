import { day01a, day01b } from "../src/day01";

test("Day01 Part 1", () => {
  const calories = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];
  expect(day01a(calories)).toBe(24000);
});

test("Day01 Part 2", () => {
  const calories = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];
  expect(day01b(calories)).toBe(45000);
});
