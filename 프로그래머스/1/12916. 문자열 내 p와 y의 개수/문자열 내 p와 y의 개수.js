function solution(s){
    let p = s.match(/p/gi) || []
    let y = s.match(/y/gi) || []
    if (p.length  == 0 && y.length  == 0 ){
        return true
    } else {
        return p.length  === y.length 
    }
}