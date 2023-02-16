function isPalindrome(str: string): boolean {
    const len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const testString = 'racecar';
  if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
  } else {
    console.log(`${testString} is not a palindrome.`);
  }
  