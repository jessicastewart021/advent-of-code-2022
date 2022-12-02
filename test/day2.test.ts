import { readDataInput, getTotalScore } from "../src/day2/day2";

describe("Day 2", () => {
  test("readDataInput() - returns valid data", async () => {
    let data = readDataInput("./src/day2/exampleInput.txt");
    expect(data).toBeDefined();
  });

  test("getTotalScore() - returns sum of scores in number form", async () => {
    let inputString = ["A Y", "B X", "C Z"];
    const gameCombo = [
      { game: "A Y", score: 8 },
      { game: "A X", score: 4 },
      { game: "B X", score: 1 },
      { game: "C Z", score: 6 },
    ];
    let result = getTotalScore(inputString, gameCombo);
    expect(result).toEqual(15);
  });
});
