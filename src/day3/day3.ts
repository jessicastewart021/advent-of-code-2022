import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string[] => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file.toString().split("\n");
};

const alphabet: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const part1 = (
  inputString: string[]
): number => {
  let totalValues: number = 0;
  for (const rucksackItems of inputString) {
    const partOne: string = rucksackItems.slice(0, rucksackItems.length / 2);
    const partTwo: string = rucksackItems.slice(
      rucksackItems.length / 2,
      rucksackItems.length
    );
    let commonCharacter: string = getCommonCharacterString(partOne, partTwo);
    totalValues += getIndexOfCharInString(commonCharacter);
  }
  return totalValues;
};

export const part2 = (inputString: string[]): number => {
  let totalValues: number = 0;
  
  for (var i = 0; i < inputString.length; i += 3) {
    let commonCharactersString: string = "";
    let finalCommonChar: string = "";

    commonCharactersString = getCommonCharacterString(inputString[i], inputString[i + 1]);
    finalCommonChar = getCommonCharacterString(commonCharactersString, inputString[i + 2]);
    
    totalValues += getIndexOfCharInString(finalCommonChar);
  }
  return totalValues;
};

export const getCommonCharacterString = (str1: string, str2: string) => {
  const set1 = new Set(str1);
  return [...new Set(str2)].filter((char) => set1.has(char)).join("");
}

export const getIndexOfCharInString = (char: string) => {
  return alphabet.indexOf(char) + 1;
};

let input = readDataInput("./src/day3/input.txt");
console.log("Part 1 Answer: ", part1(input));
console.log("Part 2 Answer: ", part2(input));