import { day01a, day01b } from "./day01";
import { day02a, day02b } from "./day02";
import { day04a, day04b } from "./day04";
import { day05a, day05b } from "./day05";
import { parseElfCalories, parseInputAsStrings } from "./utils";

const args = process.argv;
const year = args[2];
const day = args[3];
const fileName = `input/${year}/${day}.txt`;

switch (day) {
  case 'day01':
    console.log("Day 01, Part 1: ", day01a(parseElfCalories(fileName)));
    console.log("Day 01, Part 2: ", day01b(parseElfCalories(fileName)));
    break;
  case 'day02':
    console.log("Day 02, Part 1: ", day02a(parseInputAsStrings(fileName)));
    console.log("Day 02, Part 2: ", day02b(parseInputAsStrings(fileName)));
    break;
  case 'day04':
    console.log("Day 04, Part 1: ", day04a(parseInputAsStrings(fileName)));
    console.log("Day 04, Part 2: ", day04b(parseInputAsStrings(fileName)));
    break;
  case 'day05':
    console.log("Day 05, Part 1: ", day05a(
      [
        ['W', 'R', 'F'],
        ['T', 'H', 'M', 'C', 'D', 'V', 'W', 'P'],
        ['P', 'M', 'Z', 'N', 'L'],
        ['J', 'C', 'H', 'R'],
        ['C', 'P', 'G', 'H', 'Q', 'T', 'B'],
        ['G', 'C', 'W', 'L', 'F', 'Z'],
        ['W', 'V', 'L', 'Q', 'Z', 'J', 'G', 'C'],
        ['P', 'N', 'R', 'F', 'W', 'T', 'V', 'C'],
        ['J', 'W', 'H', 'G', 'R', 'S', 'V']
      ],
      parseInputAsStrings(fileName)));
    console.log("Day 05, Part 2: ", day05b(
      [
        ['W', 'R', 'F'],
        ['T', 'H', 'M', 'C', 'D', 'V', 'W', 'P'],
        ['P', 'M', 'Z', 'N', 'L'],
        ['J', 'C', 'H', 'R'],
        ['C', 'P', 'G', 'H', 'Q', 'T', 'B'],
        ['G', 'C', 'W', 'L', 'F', 'Z'],
        ['W', 'V', 'L', 'Q', 'Z', 'J', 'G', 'C'],
        ['P', 'N', 'R', 'F', 'W', 'T', 'V', 'C'],
        ['J', 'W', 'H', 'G', 'R', 'S', 'V']
      ],
      parseInputAsStrings(fileName)));
    break;
}
