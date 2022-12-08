import { day04a, day04b } from '../src/day04';

test("Day04 Part 1", () => {
  const input = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
  ];
  expect(day04a(input)).toBe(2);
});

test("Day04 Part 2", () => {
  const input = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
  ];
  expect(day04b(input)).toBe(4);
});
