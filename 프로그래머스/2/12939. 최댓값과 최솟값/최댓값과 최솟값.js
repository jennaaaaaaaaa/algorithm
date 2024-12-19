function solution(s) {
   var answer = '';

   const splitS = s.split(' ');

    
    answer =Math.min(...splitS) + ' '+  Math.max(...splitS);

   return answer;
}