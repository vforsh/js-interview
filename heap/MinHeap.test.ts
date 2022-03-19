import { createMinHeap, isValidMinHeap, MinHeap } from "./MinHeap"
import { describe, expect, test } from "vitest"

describe("MinHeap", () => {
	let heap = new MinHeap(10)
	
	test("add", () => {
		heap.add(5)
		heap.add(6)
		heap.add(4)
		expect(heap.items).toEqual([4, 5, 6, 10])
	})
	
	test("add with bubble up", () => {
		heap.add(20)
		expect(heap.items).toEqual([4, 5, 6, 10, 20])
	})
	
	test("addMultiple", () => {
		let heap = new MinHeap(10)
		heap.addMultiple(5, 6, 4, 20)
		expect(heap.items).toEqual([4, 5, 6, 10, 20])
	})
	
	test("size", () => {
		let heap = new MinHeap(10)
		expect(heap.size()).toBe(1)
		
		heap.addMultiple(5, 6, 7)
		expect(heap.size()).toBe(4)
	})
	
	test("isEmpty", () => {
		expect(heap.isEmpty()).toBe(false)
	})
	
	test("remove", () => {
		let heap = new MinHeap(10)
		heap.addMultiple(5, 6)
		
		expect(heap.remove()).toBe(5)
		expect(heap.remove()).toBe(6)
		expect(heap.remove()).toBe(10)
		expect(heap.remove()).toBeUndefined()
	})
	
	test("createHeap", () => {
		expect(createMinHeap(5, 10, 6, 20, 4).items).toEqual([4, 5, 6, 20, 10])
	})
	
	describe("isValidMinHeap", () => {
		test("valid heap", () => {
			expect(isValidMinHeap(createMinHeap(30, 20, 10))).toBe(true)
		})
		
		test("invalid heap", () => {
			let heap = new MinHeap(30)
			heap.items.push(20, 10)
			expect(isValidMinHeap(heap)).toBe(false)
		})
	})
})
