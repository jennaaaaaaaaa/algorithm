import java.util.Arrays;
class Solution {
    public double solution(int[] numbers) {
        double answer = 0;
        int sum = Arrays.stream(numbers).reduce(0, (a, b) -> a + b);
        answer = (double) sum / numbers.length;
        return answer;
    }
}