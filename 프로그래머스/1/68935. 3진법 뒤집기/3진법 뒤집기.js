function solution(n) {
    var answer = 0;

    let ternary = '';
    while (n > 0) {
        ternary = (n % 3) + ternary;
        n = Math.floor(n / 3);
    }
    let reverse = ternary.split('').reverse().join('')

    for (let i = 0; i < reverse.length; i++) {
        answer += parseInt(reverse[i]) * Math.pow(3, reverse.length - i - 1);
    }

    return answer;
}