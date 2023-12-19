function solution(n) {
    var answer = '';
    let string = ['수', '박']
    for(let i = 0; i<n; i++){
        if(i % 2===0) {
            answer+= string[0]
        } else {
            answer += string[1]
        }
    }
    return answer;
}