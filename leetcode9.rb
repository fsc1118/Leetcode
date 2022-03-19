# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    if (x < 0)
        return false 
    end
    temp = x
    revertedNumber = 0
    while temp != 0
        num = temp % 10
        revertedNumber = revertedNumber * 10 + num
        temp /= 10
    end
    return revertedNumber == x
end
