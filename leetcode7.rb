# @param {Integer} x
# @return {Integer}
def reverse(x)
    if x == -2147483648
        return 0
    end
    isPositive = x > 0
    abs = x > 0 ? x : -x
    res = 0
    while abs != 0
        num = abs % 10  
        abs /= 10
        if isPositive && (res > 214748364 || (res == 214748364 && abs > 7))
            return 0
        end
        if !isPositive && (res > 214748364 || (res == 214748364 && abs > 8))
            return 0
        end
        res = res * 10 + num
    end
    return isPositive ? res : -res
end