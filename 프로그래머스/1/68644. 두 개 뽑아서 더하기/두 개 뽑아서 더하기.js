
function solution(numbers) {
   var answer = [];
   let newArray = [];
   for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
         if (i !== j) {
            let sum = numbers[i] + numbers[j];
            newArray.push(sum);
         }
      }
   }
   newArray = new Set(newArray);
   answer = [...newArray];
   answer.sort((a, b) => a - b);
   return answer;
}