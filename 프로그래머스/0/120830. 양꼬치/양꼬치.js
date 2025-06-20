function solution(n, k) {
    var lamb = 12000 * n
    var drink = 2000 * k
    var service = ~~(n/10) * 2000
    if( n < 10) {
        return lamb + drink        
    } else if(n >= 10) {
        return lamb + drink - service
    }
}