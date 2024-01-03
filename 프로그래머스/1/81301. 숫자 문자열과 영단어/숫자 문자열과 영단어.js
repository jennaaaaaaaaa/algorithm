function solution(s) {
   var answer = '';
   let stringNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   for (let i = 0; i < stringNumber.length; i++) {
      while (s.includes(stringNumber[i])) {
         s = s.replace(stringNumber[i], i);
      }
   }
   answer = Number(s);

   return answer;
}