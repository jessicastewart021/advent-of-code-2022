import { readDataInput, getTotalCaloriesArray, part1, part2 } from '../src/day1/day1';

describe('Day 1', () => {
    test('readDataInput() - returns valid data', async () => {
        let data = readDataInput("./src/day1/exampleInput.txt")
        expect(data).toBeDefined()
    })

    test('getTotalCaloriesArray() - returns number array', async () => {
        let caloriesArray = getTotalCaloriesArray(["1", "16", "", "8", "40", "15", ""])
        expect(caloriesArray).toEqual([17, 63]);
    })

    test('part1() - returns max from number array', async () => {
        let answer = part1([100, 8937, 0, 73619, -109])
        expect(answer).toEqual(73619);

    })

    test('part2() - returns sum of 3 max values from number array', async () => {
        let answer = part2([100, 8937, 0, 73619, -109])
        expect(answer).toEqual(82656);
    })
})
