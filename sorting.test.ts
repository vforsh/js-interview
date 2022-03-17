import { describe, expect, test } from "vitest"
import {
	bubbleSort,
	createNumbersArray,
	getDigit,
	insertionSort,
	isSortedAsc,
	isSortedDesc,
	mergeSort,
	quickSort,
	radixSort,
	selectionSort,
} from "./sorting"

describe("sorting", () => {
	test('create numbers array', () => {
		expect(createNumbersArray(10).length).toBe(10)
		expect(createNumbersArray(1).length).toBe(1)
	})
	
	test('check isSorted', () => {
		expect(isSortedAsc([1, 2, 3])).toBe(true)
		expect(isSortedDesc([1, 3, 2])).toBe(false)
		expect(isSortedDesc([1, 3, undefined])).toBe(false)
	})
	
	test("bubble sort", () => {
		let nums = createNumbersArray(100)
		let sorted = bubbleSort(nums)
		
		expect(isSortedAsc(sorted)).toBe(true)
	})
	
	test("selection sort", () => {
		let nums = createNumbersArray(100)
		let sorted = selectionSort(nums)
		
		expect(isSortedAsc(sorted)).toBe(true)
	})
	
	test("insertion sort", () => {
		let nums = createNumbersArray(100)
		let sorted = insertionSort(nums)
		
		expect(isSortedAsc(sorted)).toBe(true)
		expect(insertionSort([0, 3, 2, 1])).deep.eq([0, 1, 2, 3])
		expect(insertionSort([2, 1])).deep.eq([1, 2])
	})
	
	test("merge sort", () => {
		let nums = createNumbersArray(100)
		let sorted = mergeSort(nums)
		
		expect(mergeSort([3, 2, 1])).deep.eq([1, 2, 3])
		expect(isSortedAsc(sorted)).toBe(true)
	})
	
	test("quick sort", () => {
		let nums = createNumbersArray(1000)
		let sorted = quickSort(nums)
		
		expect(quickSort([])).deep.eq([])
		expect(quickSort([1])).deep.eq([1])
		expect(quickSort([3, 2, 1])).deep.eq([1, 2, 3])
		expect(quickSort([1, 1, 1])).deep.eq([1, 1, 1])
		expect(isSortedAsc(sorted)).toBe(true)
	})
	
	test("get digit", () => {
		expect(getDigit(123, 0)).toBe(3)
		expect(getDigit(123, 1)).toBe(2)
		expect(getDigit(123, 2)).toBe(1)
		expect(getDigit(123, 3)).toBe(0)
		expect(getDigit(123, 20)).toBe(0)
		// expect(getDigit(123, -1)).toThrow()
	})
	
	test("radix", () => {
		let nums = createNumbersArray(10000)
		let sorted = radixSort(nums)
		
		expect(isSortedAsc(sorted)).toBe(true)
		expect(radixSort([233, 3, 66, 10011])).deep.eq([3, 66, 233, 10011])
	})
})
