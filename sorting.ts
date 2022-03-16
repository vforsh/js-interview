import { shuffle, times } from "lodash-es"

export function createNumbersArray(length = 100): number[] {
	return shuffle(times(length, i => i + 1))
}

export function isSortedAsc(nums: number[]): boolean {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1] || typeof nums[i] !== "number") {
			return false
		}
	}
	
	return true
}

export function isSortedDesc(nums: number[]): boolean {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < nums[i + 1] || typeof nums[i] !== "number") {
			return false
		}
	}
	
	return true
}

export function bubbleSort(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		let wasSwapped = false
		
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				let temp = nums[j]
				nums[j] = nums[i]
				nums[i] = temp
				
				wasSwapped = true
			}
		}
		
		if (!wasSwapped) {
			break
		}
	}
	
	return nums
}

export function insertionSort(nums: number[]): number[] {
	for (let i = 1; i < nums.length; i++) {
		let x = nums[i]
		let j = i - 1
		
		while (nums[j] > x && j > -1) {
			nums[j + 1] = nums[j]
			j--
		}
		
		nums[j] = x
	}
	
	return nums
}

export function selectionSort(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		let minIndex = i
		
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[minIndex]) {
				minIndex = j
			}
		}
		
		if (minIndex !== i) {
			let temp = nums[minIndex]
			nums[minIndex] = nums[i]
			nums[i] = temp
		}
	}
	
	return nums
}

export function mergeSort(nums: number[]): number[] {
	if (nums.length < 2) {
		return nums
	}
	
	let splitIndex = Math.floor(nums.length / 2)
	let left = mergeSort(nums.slice(0, splitIndex))
	let right = mergeSort(nums.slice(splitIndex))
	
	return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
	let result = []
	
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	
	return result.concat(left, right) as number[]
}

export function quickSort(nums: number[]): number[] {
	if (nums.length < 2) {
		return nums
	}
	
	let pivotIndex = nums.length - 1
	let pivot = nums[pivotIndex]
	let { left, right } = partition(nums, pivotIndex)
	
	let leftSorted = quickSort(left)
	let rightSorted = quickSort(right)
	
	return leftSorted.concat(pivot, rightSorted)
}

function partition(nums: number[], pivotIndex: number): { left: number[], right: number[] } {
	return nums.reduce((acc, num, index) => {
		if (index !== pivotIndex) {
			if (num > nums[pivotIndex]) {
				acc.right.push(num)
			} else {
				acc.left.push(num)
			}
		}
		
		return acc
	}, { left: [], right: [] })
}

export function radixSort(nums: number[]): number[] {
	let max = Math.max(...nums)
	let iterations = max.toString().length
	
	let buckets = Array.from({ length: 10 }, () => [])
	
	for (let iteration = 0; iteration < iterations; iteration++) {
		for (let j = 0; j < nums.length; j++) {
			let num = nums[j]
			let digit = getDigit(num, iteration)
			buckets[digit].push(num)
		}
		
		let k = 0
		buckets.forEach((bucket) => {
			bucket.forEach(num => nums[k++] = num)
			bucket.length = 0
		})
	}
	
	return nums
}

export function getDigit(num: number, place: number): number {
	if (place >= num.toString().length) {
		return 0
	}
	
	return parseInt(num.toString().at(-place - 1) as string)
}
