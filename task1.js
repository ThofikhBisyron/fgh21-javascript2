//1. Push berfungsi menambah satu atau lebih data baru di akhir array
const num = [1,2,3,4]
    num.push(5);
    console.log(num)
//2. pop berfungsi menghapus item terakhir dari sebuah array
const num1 = [1,2,3,4,5,6]
    num1.pop()
    console.log(num1)
//3. unshift berfungsi untuk menambah item baru di awal sebuah array
const num2 = [2,3,4,5]
    num2.unshift(1)
    console.log(num2)
//4. shift berfungsi menghapus item pertama dalam sebuah array
const num3 = [0,1,2,3,4,5]
    num3.shift()
    console.log(num3)
//5. includes berfungsi untuk mengecek apakah array memiliki elemen tertentu
const num4  = ["mangga", "apel", "pisang"]
const ada   = num4.includes("mangga")
const ada1  = num4.includes("jeruk")
    console.log(ada)
    console.log(ada1)
//6. indexof berfungsi untuk mencari letak item dalam array
const num5 = ["mangga", "apel", "pisang"]
const cari = num5.indexOf("apel")
const cari1= num5.indexOf("jeruk")
    console.log(cari)
    console.log(cari1)
//7. concat berfungsi menggabungkan 2 atau lebih array
const num6  = ["mangga", "apel", "pisang"]
const num61 = ["jeruk", "rambutan"]
const num62 = ["sirsak"]
const datanum6 = num6.concat(num61, num62)
    console.log(datanum6)
//8. slice berfungsi memilih satu atau beberapa item dari sebuah array
const num7  = ["mangga", "apel", "pisang"]
const num71 = num7.slice(1, 2)
    console.log(num71)
//s9. plice berfungsi menambah, menghapus, dan mereplace item ke atau dari sebuah array
const num8  = ["mangga", "apel", "pisang"]
//const num81 = num8.splice("jeruk")
  //  console.log(num81)
num8.splice(0, 1, "jeruk")
console.log(num8)
//10. join berfungsi menggabungkan elemen array menjadi string 
const num9 = [1,2,3,4,5,6,7,8,9,10]
console.log(num9.join("-"))
  
