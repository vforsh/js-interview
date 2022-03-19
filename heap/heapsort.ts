import { MinHeap } from "./MinHeap"
import { MaxHeap } from "./MaxHeap"

export function heapSort(nums: number[], direction: 'asc' | 'desc' = 'asc'): number[] {
	let heap = direction === 'asc'
		? new MinHeap(...nums)
		: new MaxHeap(...nums)
	
	return Array.from({ length: heap.size() }, () => heap.remove())
}
