function solution(x) {  
    let digits = []
    let temp = x; 
    while(temp > 0){
        let digit = temp%10
        digits.push(digit)
        temp = Math.floor(temp / 10);        
    }
    return x%digits.reduce((a, b) => (a + b)) === 0 ? true : false
}