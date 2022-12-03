import { day01a, day01b } from "./day01";
import { parseElfCalories } from "./utils";

const args = process.argv;
const year = args[2];
const day = args[3];

console.log("Day 01, Part 1: ", day01a(parseElfCalories(`input/${year}/${day}.txt`)));
console.log("Day 01, Part 2: ", day01b(parseElfCalories(`input/${year}/${day}.txt`)));
