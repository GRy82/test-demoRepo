const exercise1 = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw exception if given invalid input', () => {
        expect(() => { exercise1.fizzBuzz('a') }).toThrow();
        expect(() => { exercise1.fizzBuzz(null) }).toThrow();
        expect(() => { exercise1.fizzBuzz(undefined) }).toThrow();
        expect(() => { exercise1.fizzBuzz('') }).toThrow();
    });
    it('should return FizzBuzz if given number divisible by 3 and 5', () => {
        let divisByThreeAndFifteen = 15;
        const result = exercise1.fizzBuzz(divisByThreeAndFifteen);
        expect(result).toBe('FizzBuzz');
    });
    it('should return Fizz if given number divisible by 3 & not 5.', () => {
        let divisByThree = 3;
        const result = exercise1.fizzBuzz(divisByThree);
        expect(result).toBe('Fizz');
    });
    it('should return Buzz if given number divisible by 5 & not 3', () => {
        let divisByFive = 5;
        const result = exercise1.fizzBuzz(divisByFive);
        expect(result).toBe('Buzz');
    });
    it('should return true if given number divisible not divisible by 3 or 5', () => {
        const result = exercise1.fizzBuzz(1);
        expect(result).toBe(1);
    });
});