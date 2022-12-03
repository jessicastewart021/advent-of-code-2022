import { readDataInput, part1, part2, getCommonCharacterString, getIndexOfCharInString } from "../src/day3/day3";

describe("Day 2", () => {
  test("readDataInput() - returns valid data", async () => {
    let data = readDataInput("./src/day3/exampleInput.txt");
    expect(data).toBeDefined();
  });

  test("getIndexOfCharInString() - returns index of char from alphabet string", async () => {
    let index1 = getIndexOfCharInString("G")
    expect(index1).toBe(33);

    let index2 = getIndexOfCharInString("h")
    expect(index2).toBe(8);
  });

  test("getCommonCharacterString() - returns string of common characters", async () => {
    let commonString = getCommonCharacterString("GhskjHS", "akjsvH")
    expect(commonString).toBe("kjsH");

    let commonString2 = getCommonCharacterString("abc", "def")
    expect(commonString2).toBe("");
  });

  test("part1() - total sum of rucksacks", async () => {
    let input = readDataInput("./src/day3/exampleInput.txt");
    expect(part1(input)).toBe(157);
  });

  test("part2() - total sum of rucksacks", async () => {
    let input = readDataInput("./src/day3/exampleInput.txt");
    expect(part2(input)).toBe(70);
  });
});
