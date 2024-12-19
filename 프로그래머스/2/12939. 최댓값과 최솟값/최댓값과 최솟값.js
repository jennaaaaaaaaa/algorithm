function solution(s) {
   var answer = '';

   const splitS = s.split(' ');

   const maxNumber = Math.max(...splitS);
   const minNumber = Math.min(...splitS);

   answer = answer.concat(minNumber, ' ', maxNumber);

   return answer;
}