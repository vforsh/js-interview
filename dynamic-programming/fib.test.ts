import { expect, test } from "vitest"

const fib = (n: number, memo = { 1: 1, 2: 1 }) => {
	if (memo[n]) {
		return memo[n]
	}
	
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
	
	return memo[n]
}

test('fib', () => {
	expect(fib(6)).toBe(8)
	expect(fib(50)).toBe(12586269025)
})
