import { describe, expect, test } from "vitest"
import { heapsort } from "./heapsort"
import { createNumbersArray, isSortedAsc } from "./sorting"

describe('heapsort', () => {
	test('sort asc', () => {
		expect(heapsort([3, 2, 1])).deep.eq([1, 2, 3])
		expect(heapsort([3, 3, 1])).deep.eq([1, 3, 3])
		expect(heapsort([2, 1])).deep.eq([1, 2])
		
		let nums = createNumbersArray()
		let sorted = heapsort(nums)
		expect(isSortedAsc(sorted)).toBe(true)
	})
})
