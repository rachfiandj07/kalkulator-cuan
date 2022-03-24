const assert = require('assert')
const solution = require('../index.js')

it('should return positive 10', function() {
    const A = [2131, 2130, 2140]
    assert.equal(solution(A), 10)
})

it('should return positive 354', function() {
    const A = [23171, 21011, 21123, 21366, 21013, 21367]
    assert.equal(solution(A), 356)
})

it('should return min minus value if there is no profit', function() {
    const A = [23171, 21311, 21123]
    assert.equal(solution(A), 0)
})

it('should still return positive 356 when ordering is changed', function() {
    const A = [23171, 21011, 21123, 21013, 21366, 21367]
    assert.equal(solution(A), 356)
})
