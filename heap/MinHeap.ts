import { Heap } from "./Heap"

export class MinHeap extends Heap {
	
	public isValidParent(index: number): boolean {
		let item = this.items[index]
		let leftChild = this.leftChild(index) ?? Infinity
		let rightChild = this.rightChild(index) ?? Infinity
		
		return item <= leftChild && item <= rightChild
	}
	
	/*public moveUp(index: number) { // recursive
		if (index <= 0 || index >= this.items.length) {
			return
		}
		
		let parentIndex = this.parentIndex(index)
		
		if (this.isValidParent(parentIndex)) {
			return
		}
		
		this.swap(index, parentIndex)
		this.moveUp(parentIndex)
	}*/
	
	public moveUp(index: number) {
		let parentIndex = this.parentIndex(index)
		while (parentIndex > -1 && (this.at(parentIndex) > this.at(index))) {
			this.swap(index, parentIndex)
			index = parentIndex
			parentIndex = this.parentIndex(parentIndex)
		}
	}
	
	/*public moveDown(index: number) { // recursive
		if (index < 0 || index >= this.items.length - 1) {
			return
		}
		
		if (this.isValidParent(index)) {
			return
		}
		
		let smallestChildIndex = this.getSmallestChildIndex(index)
		this.swap(index, smallestChildIndex)
		this.moveDown(smallestChildIndex)
	}*/
	
	public moveDown(index: number) {
		while (!this.isValidParent(index)) {
			let newIndex = this.getSmallestChildIndex(index)
			this.swap(newIndex, index)
			index = newIndex
		}
	}
	
	private getSmallestChildIndex(index: number): number {
		let leftChildIndex = this.leftChildIndex(index)
		let leftChild = this.items[leftChildIndex] ?? Infinity
		
		let rightChildIndex = this.rightChildIndex(index)
		let rightChild = this.items[rightChildIndex] ?? Infinity
		
		return leftChild < rightChild
			? leftChildIndex
			: rightChildIndex
	}
}

export function createMinHeap(...values: number[]): MinHeap {
	return new MinHeap(...values)
}

export function isValidMinHeap(heap: MinHeap): boolean {
	return heap.items.every((item, index) => {
		let left = heap.leftChild(index) ?? Infinity
		let right = heap.rightChild(index) ?? Infinity
		
		return item < left && item < right
	})
}
