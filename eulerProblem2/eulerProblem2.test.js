const fibonacci = require('./eulerProblem2')

test('test the initial condition euler problem2, doesnt runs with lower than or equals 2 values', () => {
    expect(fibonacci(1)).toBe(null) 
})

