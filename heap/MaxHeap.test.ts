import { createMaxHeap, isValidMaxHeap, MaxHeap } from "./MaxHeap"
import { times } from "lodash-es"
import { describe, expect, test } from "vitest"

describe("MaxHeap", () => {
	let heap = new MaxHeap(10)
	
	test("add", () => {
		heap.add(5)
		heap.add(6)
		heap.add(4)
		expect(heap.items).toEqual([10, 5, 6, 4])
	})
	
	test("add with bubble up", () => {
		heap.add(20)
		expect(heap.items).toEqual([20, 10, 6, 4, 5])
	})
	
	test("addMultiple", () => {
		let heap = new MaxHeap(10)
		heap.addMultiple(5, 6, 4, 20)
		expect(heap.items).toEqual([20, 10, 6, 4, 5])
	})
	
	test("size", () => {
		let heap = new MaxHeap(10)
		expect(heap.size()).toBe(1)
		
		heap.addMultiple(5, 6, 7)
		expect(heap.size()).toBe(4)
	})
	
	test("isEmpty", () => {
		expect(heap.isEmpty()).toBe(false)
	})
	
	test("remove", () => {
		let heap = new MaxHeap(10)
		heap.addMultiple(5, 6)
		
		expect(heap.remove()).toBe(10)
		expect(heap.remove()).toBe(6)
		expect(heap.remove()).toBe(5)
		expect(heap.remove()).toBeUndefined()
	})
	
	test("createHeap", () => {
		expect(createMaxHeap(5, 10, 6, 20, 4).items).toEqual([20, 10, 6, 5, 4])
	})
	
	describe("isValidMaxHeap", () => {
		test("valid heap", () => {
			expect(isValidMaxHeap(createMaxHeap(30, 20, 10))).toBe(true)
		})
		
		test("invalid heap", () => {
			let heap = new MaxHeap(10)
			heap.items.push(20, 30)
			expect(isValidMaxHeap(heap)).toBe(false)
		})
	})
})
