let nomes = ['Fulano', 'Sicrano', 'Beltrano', 'Cicrano'];
console.log(nomes.length, nomes);

console.log(nomes[0]);
nomes[0] = 'João';
console.log(nomes[0]);

nomes.push('teste');
console.log(nomes.length, nomes);

nomes.pop();
console.log(nomes.length, nomes);

console.log(nomes.shift());
console.log(nomes.length, nomes);

console.log(nomes.unshift('Fulano'));
console.log(nomes.length, nomes);

console.log(nomes.join(';'));

console.log(nomes.lastIndexOf('Beltrano'))
console.log(nomes.indexOf('Beltrano'))
console.log(nomes.indexOf('Cicrano'))

console.log(nomes.includes('Beltrano'))
console.log(nomes.includes('João'))

console.log(nomes.slice(1, 3))