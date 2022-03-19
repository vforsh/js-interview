export abstract class Heap {
	
	items: number[]
	
	constructor(...items: number[]) {
		this.items = []
		this.addMultiple(...items)
	}
	
	abstract moveDown(index: number): void
	
	abstract moveUp(index: number): void
	
	abstract isValidParent(index: number): boolean
	
	add(item: number) {
		this.items.push(item)
		this.moveUp(this.items.length - 1)
	}
	
	addMultiple(...items: number[]) {
		items.forEach(value => this.add(value))
	}
	
	remove(): number | undefined {
		if (this.isEmpty()) {
			return
		}
		
		let removed = this.items[0]
		let tail = this.items.pop()
		
		if (!this.isEmpty()) {
			this.items[0] = tail
			this.moveDown(0)
			
			return removed
		}
		
		return tail
	}
	
	swap(index_1: number, index_2: number) {
		let temp = this.items[index_1]
		this.items[index_1] = this.items[index_2]
		this.items[index_2] = temp
	}
	
	leftChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 1
	}
	
	leftChild(parentIndex: number): number {
		return this.items[this.leftChildIndex(parentIndex)]
	}
	
	rightChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 2
	}
	
	rightChild(parentIndex: number): number {
		return this.items[this.rightChildIndex(parentIndex)]
	}
	
	parentIndex(childIndex: number): number {
		let isLeftChild = childIndex % 2 !== 0
		
		return isLeftChild
			? (childIndex - 1) / 2
			: (childIndex - 2) / 2
	}
	
	parent(childIndex: number): number {
		return this.items[this.parentIndex(childIndex)]
	}
	
	size(): number {
		return this.items.length
	}
	
	isEmpty(): boolean {
		return this.size() === 0
	}
	
	at(index: number): number | undefined {
		return this.items[index]
	}
	
}
