import { expect, test } from "vitest"

function gridTraveler(rows: number, colums: number, memo = {}): number {
	let key_1 = rows + "x" + colums
	
	if (memo[key_1]) {
		return memo[key_1]
	}
	
	let key_2 = colums + "x" + rows
	if (memo[key_2]) {
		return memo[key_2]
	}
	
	if (!rows || !colums) {
		return 0
	}
	
	if (rows === 1 || colums === 1) {
		return 1
	}
	
	let result = gridTraveler(rows - 1, colums, memo) + gridTraveler(rows, colums - 1, memo)
	memo[key_1] = result
	memo[key_2] = result
	
	return memo[key_1]
}

test("grid-travel", () => {
	expect(gridTraveler(0, 1)).toBe(0)
	expect(gridTraveler(1, 0)).toBe(0)
	
	expect(gridTraveler(1, 10)).toBe(1)
	expect(gridTraveler(8, 1)).toBe(1)
	
	expect(gridTraveler(2, 2)).toBe(2)
	expect(gridTraveler(2, 3)).toBe(3)
	
	console.log(gridTraveler(30, 40))
	
	// expect(gridTraveler(10, 10)).toBe(3)
	
})
