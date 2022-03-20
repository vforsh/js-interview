export function heapsortDesc(nums: number[]): number[] {
	let heap = [] as number[]
	
	nums.forEach(num => add(heap, num))
	nums.forEach((_, i) => nums[i] = pop(heap))
	
	return nums
}

function add(heap: number[], value: number): void {
	heap.push(value)
	moveUp(heap, heap.length - 1)
}

function pop(heap: number[]): number | undefined {
	if (!heap.length) {
		return
	}
	
	let value = heap[0]
	let tail = heap.pop()
	
	if (heap.length > 0) {
		heap[0] = tail
		moveDown(heap, 0)
		return value
	}
	
	return tail
}

function moveUp(heap: number[], index: number) {
	let parentIndex = getParentIndex(index)
	while (parentIndex > -1 && (heap[parentIndex] < heap[index])) {
		swap(heap, index, parentIndex)
		index = parentIndex
		parentIndex = getParentIndex(parentIndex)
	}
}

function moveDown(heap: number[], index: number) {
	let newIndex = getLargestChildIndex(heap, index)
	while (newIndex < heap.length && heap[index] < heap[newIndex]) {
		swap(heap, index, newIndex)
		index = newIndex
		newIndex = getLargestChildIndex(heap, newIndex)
	}
}

function swap(heap: number[], i: number, j: number) {
	let temp = heap[i]
	heap[i] = heap[j]
	heap[j] = temp
}

function getParentIndex(index: number): number {
	let isLeftChild = index % 2 !== 0
	
	return isLeftChild
		? (index - 1) / 2
		: (index - 2) / 2
}

function getLargestChildIndex(heap: number[], index: number): number {
	let leftChildIndex = index * 2 + 1
	let leftChild = heap[leftChildIndex] ?? -Infinity
	
	let rightChildIndex = index * 2 + 2
	let rightChild = heap[rightChildIndex] ?? -Infinity
	
	return leftChild > rightChild
		? leftChildIndex
		: rightChildIndex
}


