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

describe('greet', ()=> { //When testing strings, make sure tests are not too specific.
    it('should return the greeting message', () => {
        const result = lib.greet('Greg');
        expect(result).toMatch(/Greg/);
        expect(result).toContain('Greg');
    });
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        //Too general
        //expect(result).toBeDefined
        //expect(result).not.toBeNull();

        //Too specific
        // expect(result[0]).toBe('USD');
        // expect(result[0]).toBe('AUD');
        // expect(result[0]).toBe('EUR');
        //expect(result.length).toBe(3);

        //Acceptable Way
        // expect(result).toContain('USD');
        // expect(result).toContain('AUD');
        // expect(result).toContain('EUR');

        //Best Way
        expect(result).toEqual(expect.arrayContaining(['USD', 'EUR', 'AUD']));
    });
});