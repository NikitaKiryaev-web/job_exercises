// Получить новый массив отсортированных по количеству повторений значений

const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7];

const elemMap = new Map();
arr.forEach((elem) => {
  elemMap.set(elem, elemMap.has(elem) ? elemMap.get(elem) + 1 : 1);
});

let newArr = [...elemMap.entries()].sort((a, b) => b[1] - a[1]);
console.log(newArr.map(elem => elem[0]));
