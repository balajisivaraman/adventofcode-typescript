export function day01a(calories: Array<Array<number>>) {
  return calories
    .map((c) => c.reduceRight((p, c) => p + c, 0))
    .sort((a, b) => b - a)[0];
};

export function day01b(calories: Array<Array<number>>) {
  return calories
    .map((c) => c.reduceRight((p, c) => p + c, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduceRight((p, c) => p + c, 0);
};
