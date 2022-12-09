type CratesStack = string[][];
type RearrangementStep = {
  crateQty: number;
  sourceStack: number;
  destinationStack: number;
}
type RearrangementProcedure = RearrangementStep[];

function parseRearrangementStep(input: string): RearrangementStep {
  const parsed = input.match(/\d+/g) ?? [];
  const numbers = parsed.map((n) => parseInt(n));
  return {
    crateQty: numbers[0],
    sourceStack: numbers[1] - 1,
    destinationStack: numbers[2] - 1,
  };
}

function parseRearrangementProcedure(input: string[]): RearrangementProcedure {
  return input.map(parseRearrangementStep);
}

function executeRearrangementStep(step: RearrangementStep, crates: CratesStack, retainOrder: boolean) {
  var transferableCrates: string[] = [];
  var sourceStack = crates[step.sourceStack];
  for (var i = 0; i < step.crateQty; i++) {
    transferableCrates.push(sourceStack.pop() ?? '');
  }
  if (retainOrder) {
    transferableCrates.reverse();
  }
  crates[step.destinationStack].push(...transferableCrates);
}

function executeRearrangementProcedure(procedure: RearrangementProcedure, crates: CratesStack, retainOrder: boolean) {
  procedure.forEach((step) => executeRearrangementStep(step, crates, retainOrder));
}

function topmostCrates(crates: CratesStack): string {
  var topmostCrates = '';
  for (var i = 0; i < crates.length; i++) {
    if (crates[i].length != 0) {
      topmostCrates = topmostCrates + crates[i].pop();;
    }
  }
  return topmostCrates;
}

export function day05a(crates: CratesStack, input: string[]): string {
  const rearrangementProcedure = parseRearrangementProcedure(input);
  executeRearrangementProcedure(rearrangementProcedure, crates, false);
  return topmostCrates(crates);
}

export function day05b(crates: CratesStack, input: string[]): string {
  const rearrangementProcedure = parseRearrangementProcedure(input);
  executeRearrangementProcedure(rearrangementProcedure, crates, true);
  return topmostCrates(crates);
}
