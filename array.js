let myArr = [1, 2, 3, 4, 5];
// Array can contain different data types

// shallow copies and deep copies
//shallow copy changes refenrence point directly
// deep copy make new copy and does not mutate original

//slice --> does not include last index
//splice ---> mutates original array and includes last index

let marvelHeros = ["IronMan", "Hulk", "SpiderMan"];
let dcHeros = ["SuperMan", "BatMan", "Falsh"];

//push joins an array inside another array ( does not join elements)

// const allHeros = marvelHeros.concat(dcHeros);
// // concatanates elements of the two arrays
// console.log(allHeros);

// const allHeros = [...marvelHeros, ...dcHeros];(Spread Operator)
// console.log(allHeros);
// concatanates all the elements of given array

// let randomArr = [1, 2, 4, 6, 7, [1, 5, 7], [4, 5, [0, 9]]];
// const randomArrFlat = randomArr.flat(Infinity);
// console.log(randomArrFlat);
// //Flats out the arrays inside another array
// //sabai array element eutai level of depth ma hunxa
// //does not allow another array element inside an array

// console.log(Array.isArray("Rupesh"));
// //It is not an array so the result is false
// //isArray checks if the given data is array or not and returns boolean value

// console.log(Array.from("Rupesh"));
// //converts any data type to an array
