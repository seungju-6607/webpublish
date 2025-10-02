/**
 * Map : key, value 한 쌍으로 저장
 * - set(key, value)
 * - get(key)
 * - has(key)
 * - delete(key)
 */

let fruitMap = new Map();
fruitMap.set('apple' , '🍎')
fruitMap.set('orange', '🍊');

console.log(fruitMap);
console.log(fruitMap.get('apple'));
console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));
console.log(fruitMap.delete('apple'));
console.log(fruitMap);

fruitMap.set('apple','🍎');
fruitMap.set('orange','🍊'); //중복된 데이터 저장x

console.log(fruitMap);

