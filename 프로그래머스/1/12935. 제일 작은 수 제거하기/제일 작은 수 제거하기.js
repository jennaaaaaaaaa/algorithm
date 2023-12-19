function solution(arr) {
    var answer = [];
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    arr.splice(index, 1) 
    answer = arr
    if(!answer.length){
        answer.push(-1)
        return answer
    }
    return answer;
    
}