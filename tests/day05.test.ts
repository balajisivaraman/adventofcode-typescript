import { day05a, day05b } from '../src/day05';

test("Day05 Part 1", () => {
  const crates = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
  ];
  const input = [
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
  ];
  expect(day05a(crates, input)).toBe('CMZ');
});

test("Day05 Part 2", () => {
  const crates = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
  ];
  const input = [
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
  ];
  expect(day05b(crates, input)).toBe('MCD');
});
