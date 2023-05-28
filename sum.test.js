const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
})

// toEqual to check the value of an object
test('object assignment', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

// teset for the opposite of a matcher using not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++ ) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})