function solution(A) {
    let n = A.length;
    let maxProfit;
    let counter = 1;
    let index = 0;

    while(index < n && counter < n){
        if((A[counter] - A[index]) < 1 || (A[counter] - A[index]) > 1) {
            if(maxProfit == undefined) {
                maxProfit = A[counter] - A[index]
            } else if(maxProfit < (A[counter] - A[index])) {
                maxProfit = (A[counter] - A[index])
            }
            index += 1
            counter += 1
        }
    }

    return maxProfit;
}
const A = [2131, 2130, 2140]
// const A = [23171, 21011, 21123, 21366, 21013, 21367]

console.log(solution(A))

module.exports = solution