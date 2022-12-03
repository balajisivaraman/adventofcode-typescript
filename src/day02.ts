enum Shape {
  Rock = 1,
  Paper = 2,
  Scissors = 3
};

enum Result {
  Loss = 0,
  Draw = 3,
  Win = 6
};

function parseElfInput(input: string): Shape {
  if (input == 'A') {
    return Shape.Rock;
  } else if (input == 'B') {
    return Shape.Paper;
  } else {
    return Shape.Scissors;
  }
}

function parseHumanInput(input: string): Shape {
  if (input == 'X') {
    return Shape.Rock;
  } else if (input == 'Y') {
    return Shape.Paper;
  } else {
    return Shape.Scissors;
  }
}

function parseHumanInputAsPerElfInstruction(input: string): Result {
  if (input == 'X') {
    return Result.Loss;
  } else if (input == 'Y') {
    return Result.Draw;
  } else {
    return Result.Win;
  }
}

class RockPaperScissors {
  elfShape: Shape;
  humanShape!: Shape;
  result!: Result;

  constructor(elfInput: string, humanInput: string, improved: boolean) {
    this.elfShape = parseElfInput(elfInput);
    if (!improved) {
      this.humanShape = parseHumanInput(humanInput);
    } else {
      this.result = parseHumanInputAsPerElfInstruction(humanInput);
    }
  }

  play() {
    if (this.elfShape == Shape.Rock) {
      if (this.humanShape == Shape.Paper) {
        this.result = Result.Win;
      } else if(this.humanShape == Shape.Rock) {
        this.result = Result.Draw;
      } else {
        this.result = Result.Loss;
      }
    }
    if (this.elfShape == Shape.Paper) {
      if (this.humanShape == Shape.Scissors) {
        this.result = Result.Win;
      } else if(this.humanShape == Shape.Paper) {
        this.result = Result.Draw;
      } else {
        this.result = Result.Loss;
      }
    }
    if (this.elfShape == Shape.Scissors) {
      if (this.humanShape == Shape.Rock) {
        this.result = Result.Win;
      } else if(this.humanShape == Shape.Scissors) {
        this.result = Result.Draw;
      } else {
        this.result = Result.Loss;
      }
    }
    return this;
  }

  playAsPerElfInstruction() {
    if (this.elfShape == Shape.Rock) {
      if (this.result == Result.Win) {
        this.humanShape = Shape.Paper;
      } else if(this.result == Result.Draw) {
        this.humanShape = Shape.Rock;
      } else {
        this.humanShape = Shape.Scissors;
      }
    }
    if (this.elfShape == Shape.Paper) {
      if (this.result == Result.Win) {
        this.humanShape = Shape.Scissors;
      } else if(this.result == Result.Draw) {
        this.humanShape = Shape.Paper;
      } else {
        this.humanShape = Shape.Rock;
      }
    }
    if (this.elfShape == Shape.Scissors) {
      if (this.result == Result.Win) {
        this.humanShape = Shape.Rock;
      } else if(this.result == Result.Draw) {
        this.humanShape = Shape.Scissors;
      } else {
        this.humanShape = Shape.Paper;
      }
    }
    return this;
  }

  score(): number {
    return this.humanShape + this.result;
  }
}

export function day02a(input: string[]): number {
  return input
    .map((i) => new RockPaperScissors(i.split(' ')[0], i.split(' ')[1], false))
    .map((rps) => rps.play())
    .map((rps) => rps.score())
    .reduceRight((p, c) => p + c);
}

export function day02b(input: string[]): number {
  return input
    .map((i) => new RockPaperScissors(i.split(' ')[0], i.split(' ')[1], true))
    .map((rps) => rps.playAsPerElfInstruction())
    .map((rps) => rps.score())
    .reduceRight((p, c) => p + c);
}