const { isFizzy } = require('../fizzbuzz')
const { isBuzzy } = require('../fizzbuzz')
const { fizzyBuzzy } = require('../fizzbuzz')
const { fizzBuzz } = require('../fizzbuzz')

// Example
test('Sanity check', () => {
    expect(2+2).toBe(4)
  })

// Assertions are what the test uses to check inputs and outputs

test('Test isFizzy', () => {
    // takes a number and returns true if divisible by 3
    // "3" ?, 27, large numbers, 0, negative numbers, floats
    expect(isFizzy(3)).toBe(true)
    expect(isFizzy(5)).toBe(false)
    expect(isFizzy('hello')).toBe(false)
    expect(isFizzy(5.4)).toBe(false)
})

test('Test isBuzzy', () => {
// takes a number and returns true if divisible by 5
    expect(isBuzzy(5)).toBe(true)
    expect(isBuzzy(3)).toBe(false)
    expect(isBuzzy(25)).toBe(true)
    expect(isBuzzy('test')).toBe(false)
})

test('Test fizzyBuzzy', () => {
    // takes in a number and returns 'fizz' 
    // if divisible by 3, 'buzz' if divisible by 5, 
    // 'fizzbuzz' if divisible by both, and '' if neither
    expect(fizzyBuzzy(3)).toBe('fizz')
    expect(fizzyBuzzy(5)).toBe('buzz')
    expect(fizzyBuzzy(15)).toBe('fizzbuzz')
    expect(fizzyBuzzy(1)).toBe('')
    expect(fizzyBuzzy(-1)).not.toBe('fizz')

})

test('Test fizzBuzz', () => {
    // takes in a number and returns an object with the count,
    // the number of fizz, buzz, and fizzbuzz
    expect(fizzBuzz(5)).toEqual({ count: 5, fizz: 1, buzz: 1, fizzBuzz: 0 })
    expect(fizzBuzz(15)).toEqual({ count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 })
    expect(fizzBuzz(0)).toEqual({ count: 0, fizz: 0, buzz: 0, fizzBuzz: 0 })


})