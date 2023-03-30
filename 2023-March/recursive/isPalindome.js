const isPalindrome = (str) => {
  const len = str.length;
  if (len > 1) {
    if (str[0] === str[len - 1]) {
      return isPalindrome(str.slice(1, len - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
};
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium"));
