type Section = {
  start: number;
  end: number;
}

type AssignmentPair = {
  firstElf: Section;
  secondElf: Section;
};

type SectionAssignments = AssignmentPair[];

function parseSection(input: string): Section {
  const split = input.split('-');
  return {
    start: parseInt(split[0]),
    end: parseInt(split[1])
  };
}

function parseAssignmentPair(input: string): AssignmentPair {
  const parsed = input.split(',').map(parseSection);
  return {
    firstElf: parsed[0],
    secondElf: parsed[1],
  };
}

function parseSectionAssignments(input: string[]): SectionAssignments {
  return input.map(parseAssignmentPair);
}

function fullyOverlappingSections(section1: Section, section2: Section): boolean {
  return section1.start <= section2.start && section1.end >= section2.end;
}

function partiallyOverlappingSections(section1: Section, section2: Section): boolean {
  return section1.start <= section2.start && section1.end >= section2.start;
}

function fullyContainedPair(assignmentPair: AssignmentPair): boolean {
  return fullyOverlappingSections(assignmentPair.firstElf, assignmentPair.secondElf) || fullyOverlappingSections(assignmentPair.secondElf, assignmentPair.firstElf);
}

function partiallyContainedPair(assignmentPair: AssignmentPair): boolean {
  return partiallyOverlappingSections(assignmentPair.firstElf, assignmentPair.secondElf) || partiallyOverlappingSections(assignmentPair.secondElf, assignmentPair.firstElf);
}


export function day04a(input: string[]): number {
  return parseSectionAssignments(input).filter(fullyContainedPair).length;
}

export function day04b(input: string[]): number {
  return parseSectionAssignments(input).filter(partiallyContainedPair).length;return 0;
}
