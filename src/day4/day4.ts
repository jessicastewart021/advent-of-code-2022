import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string[] => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file.toString().split("\n");
};

export const range = (min: number, max: number) =>
  [...Array(max - min + 1).keys()].map((i) => i + min);

export const getCompletelyOverlapping = (stringArrayInput: string[]) => {
  let overlappingCount: number = 0;

  for (const rangeSet of stringArrayInput) {
    let range = rangeSet.split(",");
    if (areCompletelyOverlapping(range[0], range[1])) {
      overlappingCount++;
    }
  }
  return overlappingCount;
};

export const areCompletelyOverlapping = (range1: string, range2: string) => {
  let range1Values = range1.split("-");
  let range2Values = range2.split("-");

  let test1: number[] = range(+range1Values[0], +range1Values[1]);
  let test2: number[] = range(+range2Values[0], +range2Values[1]);

  let checker = (arr: any, target: any) =>
    target.every((v: any) => arr.includes(v));

  return checker(test1, test2) || checker(test2, test1);
}

export const getPartiallyOverlapping = (stringArrayInput: string[]) => {
  let overlappingCount: number = 0;

  for (const rangeSet of stringArrayInput) {
    let range = rangeSet.split(",");
    if (arePartiallyOverlapping(range[0], range[1])) {
      overlappingCount++;
    }
  }
  return overlappingCount;
};

export const arePartiallyOverlapping = (range1: string, range2: string) => {
  let range1Values = range1.split("-");
  let range2Values = range2.split("-");

  let test1: number[] = range(+range1Values[0], +range1Values[1]);
  let test2: number[] = range(+range2Values[0], +range2Values[1]);

  let checker = (arr: any, target: any) =>
    target.some((v: any) => arr.includes(v));

  return checker(test1, test2) || checker(test2, test1);
}

let input = readDataInput("./src/day4/input.txt");
console.log("Part 1 Answer: ", getCompletelyOverlapping(input));
console.log("Part 2 Answer: ", getPartiallyOverlapping(input));
