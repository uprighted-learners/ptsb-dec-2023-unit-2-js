const imports = require('./file-path-example/beans.js') // file extension optional
const { beans, favFood: food } = require('./file-path-example/beans.js')

// this is what imports looks like
// { 
//     beans: 'I love beans', 
//     favFood: [Function: favFood] 
// }

// access the attributes and methods of the import object
console.log(imports);
console.log(imports.beans);
console.log(imports.favFood('pizza'));

// or destructure them into their own variables
console.log(beans);
console.log(food('pie'));
