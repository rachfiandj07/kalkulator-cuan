function solution(A) {
    let n = A.length;
    let maxProfit = []
    let counter = 1;
    let index = 0;

    while(index <= n && counter <= n) {
        maxProfit.push((A[counter] - A[index]))
        if(counter == n) {
            counter = 1;
            index += 1;
        }
        counter += 1
    }

    const ans = maxProfit.filter((i) => !Number.isNaN(i))

    return Math.max(...ans);
}
const A = [2131, 2130, 2140]

console.log(solution(A))

module.exports = solution