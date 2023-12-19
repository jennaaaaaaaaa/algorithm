function solution(s) {
    var answer = '';
    let length = s.length
    let index = Math.floor(length/2)
    if (length%2 !== 0){
        return s[index]
    } else {
        return s[index-1] + s[index]
    }
}