import { describe, expect, test } from "vitest"
import { heapSort } from "./heapsort"
import { createNumbersArray, isSortedAsc, isSortedDesc } from "../sorting"

describe.skip('heapsort', () => {
	test('asc', () => {
		expect(heapSort([1])).deep.eq([1])
		expect(heapSort([2, 1])).deep.eq([1, 2])
		expect(heapSort([3, 2, 1])).deep.eq([1, 2, 3])
		expect(heapSort([3, 2, 3])).deep.eq([2, 3, 3])
		
		let nums = createNumbersArray()
		let sorted = heapSort(nums)
		expect(isSortedAsc(sorted)).toBe(true)
	})
	
	test('desc', () => {
		expect(heapSort([1, 2, 3], 'desc')).deep.eq([3, 2, 1])
		expect(heapSort([3, 2, 3], 'desc')).deep.eq([3, 3, 2])
		
		let nums = createNumbersArray()
		let sorted = heapSort(nums, 'desc')
		expect(isSortedDesc(sorted)).toBe(true)
	})
})
