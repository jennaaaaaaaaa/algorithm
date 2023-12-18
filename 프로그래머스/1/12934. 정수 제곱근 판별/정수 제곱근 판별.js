function solution(n) {
    var answer = n%Math.sqrt(n) === 0 ? (Math.sqrt(n) + 1)**2 : -1
    return answer;
}