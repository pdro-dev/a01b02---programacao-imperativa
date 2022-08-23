/* 
Arrays e Coleções
Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados
inesperados.

Em primeiro lugar, vamos praticar as ações mais comuns e necessárias
    A. Acessar elementos específicos de um array.
    B. Modificar cada um dos elementos de um array e imprimi-los no console.
    C. Adicionar elementos a um array.
    D. Extrair elementos de um array.
    E. Comparar elementos de um array com os elementos de outro.
*/

// A. Acessar elementos específicos de um array.
let numbers = [22, 33, 54, 66, 72]
console.log(numbers[0]);

// B. Modificar cada um dos elementos de um array e imprimi-los no console.
numbers[0] = 99;
numbers[1] = 88;
numbers[2] = 77;
numbers[3] = 66;
numbers[4] = 55;
console.log(numbers);

// C. Adicionar elementos a um array.
numbers.push(44);
console.log(numbers);

// D. Extrair elementos de um array.
console.log(numbers.pop());
console.log(numbers);

// E. Comparar elementos de um array com os elementos de outro.
let numbers2 = [22, 33, 54, 66, 72]
console.log(numbers == numbers2);
console.log(numbers === numbers2);
console.log(numbers[0] == numbers2[0]);
console.log(numbers[0] === numbers2[0]);