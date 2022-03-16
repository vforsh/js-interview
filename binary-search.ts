import { isSortedAsc } from "./sorting"

export function binarySearch<T = number>(nums: T[], item: T): number {
	// @ts-ignore
	if (!isSortedAsc(nums)) {
		throw new Error("array is not sorted!")
	}
	
	let min = 0
	let max = nums.length - 1
	let index: number
	while (min <= max) {
		index = Math.floor((min + max) / 2)
		
		if (item === nums[index]) {
			return index
		}
		
		if (item > nums[index]) {
			min = index + 1
		} else {
			max = index - 1
		}
	}
	
	return -1
}

export function binarySearchRecursive<T = number>(nums: T[], item: T, min = 0, max = nums.length - 1): number {
	if (min > max) {
		return -1
	}
	
	let middleIndex = Math.floor((min + max) / 2)
	let middle = nums[middleIndex]
	if (middle === item) {
		return middleIndex
	}
	
	return item > middle
		? binarySearchRecursive(nums, item, middleIndex + 1, max)
		: binarySearchRecursive(nums, item, min, middleIndex - 1)
}

