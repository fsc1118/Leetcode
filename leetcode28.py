class Solution:
    # robin karp
    BASE = 1 # can be larger to avoid hash collison
    def getHash(self, string: str, fromIndex: int, toIndex: int):
        base = self.BASE
        result = 0
        i = toIndex
        while i >= fromIndex:
            result += ord(string[i]) * base
            base *= self.BASE
            i -= 1
        return result

    def next(self, originalString: str, getHash: int, newAddedIndex: int, removedIndex: int):
        getHash -= ((self.BASE ** (newAddedIndex - removedIndex)) * ord(originalString[removedIndex]))
        getHash *= self.BASE
        getHash += ord(originalString[newAddedIndex]) * self.BASE
        return getHash

    def isMatch(self, string1: str, string2: str, fromIndex: int):
        for i in range(0, len(string2)):
            if string1[fromIndex] != string2[i]:
                return False
            fromIndex += 1
        return True

    def strStr(self, haystack: str, needle: str):
        if len(haystack) < len(needle):
            return -1
        start = 0
        needleHash = self.getHash(needle, 0, len(needle) - 1)
        hash = 0
        while start + len(needle) <= len(haystack):
            if start == 0:
                hash = self.getHash(haystack, start, start + len(needle) - 1)
            else:
                hash = self.next(haystack, hash, start + len(needle) - 1, start - 1)
            if needleHash == hash and self.isMatch(haystack, needle, start):
                return start
            start += 1
        return -1