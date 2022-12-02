import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string[] => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file.toString().split("\n");
};

interface gameCombo {
  game: string;
  score: number;
}

const part1GameCombos: gameCombo[] = [
  { game: "A Y", score: 8 },
  { game: "B Z", score: 9 },
  { game: "C X", score: 7 },
  { game: "A X", score: 4 },
  { game: "B Y", score: 5 },
  { game: "C Z", score: 6 },
  { game: "A Z", score: 3 },
  { game: "B X", score: 1 },
  { game: "C Y", score: 2 },
];

const part2GameCombos: gameCombo[] = [
  { game: "A Y", score: 4 },
  { game: "B Z", score: 9 },
  { game: "C X", score: 2 },
  { game: "A X", score: 3 },
  { game: "B Y", score: 5 },
  { game: "C Z", score: 7 },
  { game: "A Z", score: 8 },
  { game: "B X", score: 1 },
  { game: "C Y", score: 6 },
];

export const getTotalScore = (
  inputStringArray: string[],
  gameCombos: gameCombo[]
): number => {
  let comboMapping: gameCombo[] = [];

  for (const game of inputStringArray) {
    let result = gameCombos.filter((obj) => {
      return obj.game === game;
    });
    comboMapping.push(result[0]);
  }

  return comboMapping.reduce(function (acc, obj) {
    return acc + obj.score;
  }, 0);
};

let input: string[] = readDataInput("./src/day2/input.txt");
console.log("Part 1 Answer: ", getTotalScore(input, part1GameCombos));
console.log("Part 2 Answer: ", getTotalScore(input, part2GameCombos));
