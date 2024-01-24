
function solution(nums) {
   var answer = 0;
   let addNums = [];

   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         for (let k = j + 1; k < nums.length; k++) {
            addNums.push(nums[i] + nums[j] + nums[k]);
         }
      }
   }
   addNums.forEach((num) => {
      let isPrime = true;
      for (let i = 2; i <= num / 2; i++) {
         if (num % i === 0) {
            isPrime = false;
         }
      }
      answer += isPrime ? 1 : 0;
   });
   return answer;
}