const enhancer = require('./enhancer.js');

describe('repair()', () => {
    it('should return a durability of 100', (item) => {
        expect(enhancer.repair(item.durability)).toBe(100);
    })
});
