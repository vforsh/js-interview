import { expect, test } from "vitest"
import { times } from "lodash-es"
import { binarySearch, binarySearchRecursive } from "./binary-search"

test("binary search", () => {
	let nums = times(100, i => i)
	// console.log({ nums })
	
	expect(binarySearch([], 0)).toBe(-1)
	expect(binarySearch(nums, 1000)).toBe(-1)
	expect(binarySearch(nums, 0)).toBe(0)
	expect(binarySearch(nums, 99)).toBe(99)
	expect(binarySearch(nums, -1)).toBe(-1)
	expect(binarySearch([1, 2, 3], 3)).toBe(2)
})

test("binary search recursive", () => {
	let nums = times(1000, i => i)
	// console.log({ nums })
	
	expect(binarySearchRecursive([], 0)).toBe(-1)
	expect(binarySearchRecursive(nums, 1000)).toBe(-1)
	expect(binarySearchRecursive(nums, 0)).toBe(0)
	expect(binarySearchRecursive(nums, 99)).toBe(99)
	expect(binarySearchRecursive(nums, -1)).toBe(-1)
	expect(binarySearchRecursive([1, 2, 3], 3)).toBe(2)
	expect(binarySearchRecursive([1, 2, 3], 1)).toBe(0)
})
