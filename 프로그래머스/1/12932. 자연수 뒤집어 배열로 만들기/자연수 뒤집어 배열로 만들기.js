function solution(n) {
    var answer = [];
    n = n.toString().split('')
    n = n.reverse()
    for(let i = 0; i < n.length; i++){
        answer.push(Number(n[i]))
    }
    
    return answer;
}