import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
	it('adds 1 + 4 to equal 5', () => {
		expect(1 + 4).toBe(5);
	});
});