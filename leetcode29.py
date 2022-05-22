class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if dividend == -2147483648 and divisor == -1:
            return 2147483647
        if dividend < 0:
            return -self.divide(-dividend, divisor)
        if divisor < 0:
            return -self.divide(dividend, -divisor)
        left = 0
        right = dividend
        while left <= right:
            mid = (left + right) >> 1
            res = self.multiply(mid, divisor)
            if res == dividend:
                return mid
            if res < dividend and res + divisor > dividend:
                return mid
            if res > dividend:
                right = mid - 1
            else:
                left = mid + 1
    def multiply(self, a, b):
        if b == 0:
            return 0
        if b % 2 == 0:
            half = self.multiply(a, b >> 1)
            return half + half
        else:
            half = self.multiply(a, b >> 1)
            return half + half + a