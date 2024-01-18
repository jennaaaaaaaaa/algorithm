function solution(a, b) {
   var answer = '';
   let day = new Date(2016, a - 1, b);
   let weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   answer = weekDay[day.getDay()];
   return answer;
}