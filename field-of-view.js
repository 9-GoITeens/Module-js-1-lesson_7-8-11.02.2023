//  Область видимості.
// const a = 5;

const b = 10;
// const a = 5;

if (true) {
    const a = 5;
    
    console.log(b);
   
   console.log(a);
} 

console.log(b);
// console.log(a);

