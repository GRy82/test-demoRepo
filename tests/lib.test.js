//basic guideline: Number of unit tests that should be written for a given
//method should be >= the number of paths in the method.

// "Tests are first-class citizens in your source code." - Mosh Hamedani

//toBe, toEqual, toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan toBeLessThanOrEqual
//use toBeCloseTo() for floating point numbers.
//toBeNull, toBeUndefined, toBeTruthy, toBeFalsy.

const lib = require('../lib');

describe('absolute', ()=>{
    it('should return a positive number if input is positive', () => {
        let positiveNumber = 1;
        const result = lib.absolute(positiveNumber);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        let positiveNumber = -1;
        const result = lib.absolute(positiveNumber);
        expect(result).toBe(1);
    });
    
    it('should return 0 if input is 0', () => {
        let positiveNumber = 0;
        const result = lib.absolute(positiveNumber);
        expect(result).toBe(0);
    });
});
