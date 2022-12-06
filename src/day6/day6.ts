import { readFileSync } from "fs";

export const readDataInput = (fileInputPath: string): string => {
  const file = readFileSync(fileInputPath, "utf-8");
  return file.toString();
};

export const findUniqueChar = (markerLength: number): string => {
  let marker: string[] = [];
  for (const char of input) {
    if (marker.length < markerLength) {
      marker.push(char);
    } else {
      marker.shift();
      marker.push(char);
    }

    if (marker.length === markerLength && isUnique(marker.join(""))) {
      return marker.join("");
    }
  }
  return marker.join("");
};

const isUnique = (str: string): boolean => {
  return new Set(str).size == str.length;
};

const getIndexOfString = (selectedString: string, markerLength: number): number => {
  return (input.lastIndexOf(selectedString) + markerLength);
};

let input = readDataInput("./src/day6/input.txt");
let uniqueString1: string = findUniqueChar(4);
console.log("Part 1 Answer: ", getIndexOfString(uniqueString1, 4));
let uniqueString2: string = findUniqueChar(14);
console.log("Part 2 Answer: ", getIndexOfString(uniqueString2, 14));