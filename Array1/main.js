
// Array3
// let c = +prompt("Nechta C element kerak : ");
// let a = +prompt("Birinchi a elementni kiriting : ");
// let d = +prompt("D elementni kiriting : ");

// let n = []; 

// for (let i = 0; i < c; i++) {
//   n[i] = a + (i + d);
//   console.log(n[i])
// }


// // Array4
// let c = +prompt("Nechta C element kerak : ");
// let a = +prompt("Birinchi a elementni kiriting : ");
// let d = +prompt("D elementni kiriting : ");
// let n = [];
// for(i=0;i<n;i++){
//   n[i]=a+(i*d)
//   console.log(n[i])
// }

// Array5
// let n = +prompt("n ni kiriting : ")
// let fib = []
// fib[0]=1;
// fib[1]=1;
// for(i=2;i<n;i++){
//   fib[i]=fib[i-1]+fib[i-2]
//   console.log(fib[i])
// }


// Array7
// let N = +prompt("N ni kiriting : ");
// let res = []

// for(i=N;i>=0;i--){
//   res[i] = i
//   console.log(res[i])
// }


// Array8

// let N = +prompt("Massivga nechta sonni random qilmoqchisiz : ");       // consol uchun
// // let N = 10;           //terminal uchun
// let res = []
// let newRes = []
// let X = []
// let count = 0;
// for(i=0;i<N;i++){
//     res[i]=Math.floor(Math.random()*99)+1;
// if(res[i]%2==1){
//     count++
//     newRes.push( res[i])
// }
// }console.log("Boshlang'ich massiv",res)
// console.log("toq sonlar",newRes)
// console.log("Toq sonlar soni : ",count)



// Random son 
// let N = +prompt("Massivga nechta sonni random qilmoqchisiz : ");
// let res = []
// for(i=1;i<=N;i++){
//     res[i]=Math.floor(Math.random()*99)
// +1;
// console.log(res[i])
// }



// Array9
// let N = +prompt("Massivga nechta sonni random qilmoqchisiz : "); // consol uchun
// // let N = 10;//terminal uchun
// let res = []
// let newRes = []
// let X = []
// let count = 0;
// for(i=0;i<N;i++){
//     res[i]=Math.floor(Math.random()*99)+1;
// if(res[i]%2==0){
//     count++
//     newRes.push( res[i])
// }
// }console.log("Boshlang'ich massiv",res)
// console.log("juft sonlar",newRes)

// for(i=newRes.length-1;i>=0;i--){
//     X.push(newRes[i])
// }
// console.log("Yangi massivni teskari varianti",X)
// console.log("Juft sonlar soni : ",count)


// Array10
// let N = +prompt("Massivga nechta sonni random qilmoqchisiz : "); // consol uchun
// let N = 10;//terminal uchun
// let res = []
// let newRes = []
// let X = []
// let Y =[]
// let newArray = []
// for(i=0;i<N;i++){
//     res[i]=Math.floor(Math.random()*99)+1;
// if(res[i]%2==0){
//     newRes.push( res[i])
//     newArray.push(res[i])

// }else if(res[i]%2==1){
//         Y.push( res[i])
        
// }

// }for(i=Y.length-1;i>=0;i--){
//     X.push(Y[i])
//     newArray.push(Y[i])
// }

// console.log("Boshlang'ich massiv",res)
// console.log("juft sonlar",newRes)
// console.log("toq sonlar",Y);
// console.log("teskari toq",X)
// console.log("Yangi massiv",newArray)


// objekt1
// const Cars = {
//     name: "BMW",
//     model:"X7",
//     age:2025,
//     price: 100.000,
//     color: "Purlle Aurpic"

// }
// console.log(Object.keys(Cars));



// object2
// let nums = []
// const baholar = {
//     Alisher: 85,
//     Dilshod: 90,
//     Madina: 78
// };
// const values = Object.values(baholar)
// let sum = 0;
// for(i=0;i<values.length;i++){
//     sum+=values[i]
// }
// console.log(sum)



// object3
// let mahsulotlar = [
//     { nom: "Olma", narx: 5000 },
//     { nom: "Banan", narx: 7000 },
//     { nom: "Uzum", narx: 10000 }
// ]; 

// for(i=0;i<mahsulotlar.length;i++){
//     console.log(mahsulotlar[i].nom,"-",mahsulotlar[i].narx, "so'm")
// }




