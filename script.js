let minggu = "hari ini minggu"
let libur = "hari ini libur"

minggu = true
libur = true

let hasil = "0"

//1
hasil = !minggu
console.log("No.1", hasil)

//2
hasil = !libur
console.log("No.2", hasil)

//3
hasil = minggu && libur
console.log("No.3", hasil)

//4
hasil = !minggu && libur
console.log("No.4", hasil)

//5
hasil = minggu && !libur
console.log("No.5", hasil)

//6
hasil = !minggu && !libur
console.log("No.6", hasil)

//7
hasil = minggu || libur
console.log("No.7", hasil)

//8
hasil = !minggu || !libur
console.log("No.8", hasil)