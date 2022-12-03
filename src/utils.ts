import * as fs from 'fs';

export function parseElfCalories(fileName: string): Array<Array<number>> {
  const rawData = fs.readFileSync(fileName, 'utf-8');
  return rawData
    .split("\n\n")
    .map((l) => l.split("\n").map((calorie) => parseInt(calorie)).filter((n) => !isNaN(n)));
}

export function parseInputAsStrings(fileName: string): string[] {
  return fs.readFileSync(fileName, 'utf-8').split("\n").filter((l) => l != '');
}
