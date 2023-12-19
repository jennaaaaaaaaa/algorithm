function solution(phone_number) {
    var answer = '';
    let maskPart = '*'.repeat(phone_number.length-4)
    let delPart = phone_number.slice(-4)
    answer = maskPart + delPart
    return answer;
}