function solution(numbers) {
    var sum = numbers.reduce((a, b) => a+b,0);
    answer = sum / numbers.length
    return answer;
}