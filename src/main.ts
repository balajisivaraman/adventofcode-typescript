import { day01a, day01b } from "./day01";
import { day02a, day02b } from "./day02";
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
}
