function solution(n, m) {
    let isPrime = true
    let nPrime = []
    let mPrime = []
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            isPrime = true
            nPrime.push(i)
        } else{
            isPrime = false
        }
    }
    for(let i = 1; i <= m; i++){
        if(m%i === 0){
            isPrime = true
            mPrime.push(i)
        } else{
            isPrime = false
        }
    }

    // CD
    let commonPrime = nPrime.filter(n => mPrime.includes(n))

    // LCM
    let multiple = (n * m)/ Math.max(...commonPrime)

    // GCD, LCM
    let answer = [Math.max(...commonPrime), multiple]
    
    return answer;
}