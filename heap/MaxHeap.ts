import { Heap } from "./Heap"

export class MaxHeap extends Heap {
	
	public isValidParent(index: number): boolean {
		let item = this.items[index]
		let leftChild = this.leftChild(index) ?? -Infinity
		let rightChild = this.rightChild(index) ?? -Infinity
		
		return item >= leftChild && item >= rightChild
	}
	
	public moveUp(index: number) {
		if (index <= 0 || index >= this.items.length) {
			return
		}
		
		let parentIndex = this.parentIndex(index)
		
		if (this.isValidParent(parentIndex)) {
			return
		}
		
		this.swap(index, parentIndex)
		this.moveUp(parentIndex)
	}
	
	public moveDown(index: number) {
		if (index < 0 || index >= this.items.length - 1) {
			return
		}
		
		if (this.isValidParent(index)) {
			return
		}
		
		let largestChildIndex = this.getLargestChildIndex(index)
		this.swap(index, largestChildIndex)
		this.moveDown(largestChildIndex)
	}
	
	private getLargestChildIndex(index: number): number {
		let leftChildIndex = this.leftChildIndex(index)
		let leftChild = this.items[leftChildIndex] ?? -Infinity
		
		let rightChildIndex = this.rightChildIndex(index)
		let rightChild = this.items[rightChildIndex] ?? -Infinity
		
		return leftChild > rightChild
			? leftChildIndex
			: rightChildIndex
	}
}

export function createMaxHeap(...values: number[]): MaxHeap {
	return new MaxHeap(...values)
}

export function isValidMaxHeap(heap: MaxHeap): boolean {
	return heap.items.every((parent, index) => {
		let leftChild = heap.leftChild(index) ?? -Infinity
		let rightChild = heap.rightChild(index) ?? -Infinity
		
		return parent >= leftChild && parent >= rightChild
	})
}
