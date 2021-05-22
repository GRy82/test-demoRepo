//basic guideline: Number of unit tests that should be written for a given
//method should be >= the number of paths in the method.

// "Tests are first-class citizens in your source code." - Mosh Hamedani

//toBe, toEqual, toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan toBeLessThanOrEqual
//use toBeCloseTo() for floating point numbers.
//toBeNull, toBeUndefined, toBeTruthy, toBeFalsy.

//in package.json, set scripts.test: "jest --watchAll" to have Jest reload on save.
//Jest will then provide you with updated test results in terminal.

const lib = require('../lib');
const db = require('../db');

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

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        //with toEqual, result must have no less and no more props than those seen in 
        //object being passed as argument in order for test to pass.
        expect(result).toEqual({ id: 1, price: 10 }); 
        //w/ toMatchObject, it just checks that the included props are equal
        expect(result).toMatchObject({ id: 1, price: 10 }); 
        //check by single property.
        expect(result).toHaveProperty('id', 1);
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

//Some testers follow single assertion principle rigidly, and only do one 
//assert or expect per 'it' function or 'test'.
describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        //can't be null undefined, NaN, '', 0, or false
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });
    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('greggyfresh4935');
        expect(result).toHaveProperty('username', 'greggyfresh4935');
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 10 points', () => {
        //fake or mock function.
        db.getCustomerSync = function(customerId){
            console.log('Fake reading customer');
            return { id: customerId, points: 11 };
        }
        
        const order = { customerId: 1, price: 10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});