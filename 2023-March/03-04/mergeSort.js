const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (a, b) => {
  const alen = a.length,
    blen = b.length,
    goal = alen + blen;
  let newArr = [];
  let i = 0,
    j = 0;
  while (newArr.length < goal) {
    if (i < alen && j < blen) {
      if (a[i] <= b[j]) {
        newArr.push(a[i]);
        i++;
      } else {
        newArr.push(b[j]);
        j++;
      }
    } else if (j >= blen) {
      newArr.push(a[i]);
      i++;
    } else {
      newArr.push(b[j]);
      j++;
    }
  }
  return newArr;
};

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
