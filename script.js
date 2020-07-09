// const random = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
//   };

// const pow = (number, power) => {  // 
//     let result = 1;
//     for (let i = 0; i <10, i++)
// }


// const generateNumber = (amount, from, to) => {
//       for (let i = 0; i < amount; i++) {
//       console.log(random(from, to));
//       }
//   };

//   generateNumber(1, 50, 100);

// const generateNumber = (amount, from, to) => {
//     let str = '';
//     for (let i = 0; i < amount; i++) {
//      str +=(!str ? "" : ",") + random(from, to); // !str это пустая строка, если нет то ставить запятую
//     }
//     return str;
// };

// const listOfNumber = generateNumber(10, 50, 100);
// console.log(listOfNumber);

// const fewWords = "big eyes";
// const cat = {
//     color: "black",
//     character: "good",
//     [fewWords]: "yes",
// }
// console.log(cat);

let globalId = 1;
const createMonster =  (id, name, superPower, area) => ({
        // name: name,
        // superPower: superPower,
        // area: area,
        id: globalId++,
        userId: id,
        name,
        superPower,
        area,
    });

// console.log(createMonster(1, "Ktulhu", "Telekineses","Ocean"));
// console.log(createMonster(2, "elder", "intelligence","cave"));
const ktulhu = createMonster(1, "Ktulhu", "Telekineses","Ocean");
const elder = createMonster(2, "elder", "intelligence","cave");

console.log(ktulhu.name);


// const key = prompt("please type a prop name");
// console.log(ktulhu[key]);

// for (const key in ktulhu) {
//     if (ktulhu.hasOwnProperty(key)) {
//         const value = ktulhu[key];
//         console.log(value, key);
//     }
// }

const ktulhuV2 = ktulhu;
ktulhuV2.ability = "Kill";
delete ktulhuV2.ability;
console.log(ktulhu, ktulhuV2);