import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string[] => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file.toString().split("\n");
};

export const getTotalCaloriesArray = (numbersArray: string[]): number[] => {
  let calorieTotals: number[] = [];
  let currentCalories = 0;

  for (const number of numbersArray) {
    if (number === "") {
      calorieTotals.push(currentCalories);
      currentCalories = 0;
    } else {
      currentCalories += Number(number);
    }
  }
  return calorieTotals;
};

export const part1 = (calorieTotals: number[]): number => {
  return Math.max(...calorieTotals);
};

export const part2 = (array: number[]): number => {
  const top3Array = array.sort((a, b) => b - a).slice(0, 3);
  var sum = top3Array.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
};

let input = readDataInput("./src/day1/input.txt");
let calorieTotalArray = getTotalCaloriesArray(input);
console.log("Part 1 Answer: ", part1(calorieTotalArray));
console.log("Part 2 Answer: ", part2(calorieTotalArray));