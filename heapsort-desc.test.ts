import { describe, expect, test } from "vitest"
import { createNumbersArray, isSortedDesc } from "./sorting"
import { heapsortDesc } from "./heapsort-desc"

describe('heapsort', () => {
	test('sort desc', () => {
		expect(heapsortDesc([1, 2, 3])).deep.eq([3, 2, 1])
		expect(heapsortDesc([3, 1, 3])).deep.eq([3, 3, 1])
		expect(heapsortDesc([1, 2])).deep.eq([2, 1])
		
		let nums = createNumbersArray()
		let sorted = heapsortDesc(nums)
		expect(isSortedDesc(sorted)).toBe(true)
	})
})
