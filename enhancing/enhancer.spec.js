const enhancer = require('./enhancer.js');

describe('repair()', () => {
    it('should return a durability of 100', () => {
        expect(enhancer.repair({
            name: 'sword',
            durability: 50,
            enhancement: 10
        })).toEqual({
            name: 'sword',
            durability: 100,
            enhancement: 10
        })
    })


});


