const multiples = require('./eulerProblem1')

test('tests if the primary output with inititial condition', () => {
    const num = 10
    expect(multiples(num)).toBe(23)
})

test('tests inputs will get more multiples, in this case(sum = +10 +13) ', () => {
    const num = 13
    expect(multiples(num)).toBe(45)
})

test('tests if results always been greater than input', () => {
    const num = 15
    expect(multiples(num)).toBeGreaterThan(num)
})

