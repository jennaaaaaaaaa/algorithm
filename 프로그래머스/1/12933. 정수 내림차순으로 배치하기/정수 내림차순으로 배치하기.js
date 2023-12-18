function solution(n) {
    var answer = String(n).split('').sort((a, b) => b- a).join('')
    answer = Number(answer)
    return answer;
}