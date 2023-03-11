const merge = (arr1, arr2, comp) => {
  const me = (a, b, comp) => {
    if (!comp) {
      comp = function (a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      };
    }
    const alen = a.length,
      blen = b.length,
      goal = alen + blen;
    let newArr = [];
    let i = 0,
      j = 0;
    while (newArr.length < goal) {
      if (i < alen && j < blen) {
        if (comp(a[i], b[j]) < 0) {
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

  const mergeSort = (arr, comp) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comp);
    let right = mergeSort(arr.slice(mid), comp);

    return me(left, right, comp);
  };
  return mergeSort(arr1.concat(arr2), comp);
};

function oldestToYoungest(a, b) {
  return a - b;
}
console.log(merge([1, 10, 50, 2], [14, 99, 100], oldestToYoungest));
