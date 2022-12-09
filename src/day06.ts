export function day06(input: string, numberOfDistinctCharacters: number): number {
  for (var i = 0; i < input.length; i++) {
    const sub = input.slice(i, i + numberOfDistinctCharacters);
    if (sub.length == new Set(sub).size) {
      return i + numberOfDistinctCharacters;
    }
  }
  return 0;
}
