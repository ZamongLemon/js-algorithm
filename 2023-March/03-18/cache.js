const solution = (cacheSize, cities) => {
  let answer = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((element) => {
    element = element.toLowerCase();
    let place = cache.indexOf(element);
    //있을때
    if (place !== -1) {
      cache = cache.filter((el) => el != element);
      cache.push(element);
      answer += 1;
    } else {
      //없을때
      if (cache.length === cacheSize) cache.shift();
      cache.push(element);
      answer += 5;
    }
    console.log(cache);
  });
  return answer;
};

/* console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA"
  ])
); //	50 

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul"
  ])
); //21
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome"
  ])
); //60
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome"
  ])
); //52*/
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); //	16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); //25
