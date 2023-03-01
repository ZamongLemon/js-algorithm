function solution(numbers) {
  const clean = [
    /zero/g,
    /one/g,
    /two/g,
    /three/g,
    /four/g,
    /five/g,
    /six/g,
    /seven/g,
    /eight/g,
    /nine/g
  ];

  for (let i = 0; i < 10; i++) numbers = numbers.replace(clean[i], i);

  return parseInt(numbers);
}
console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
