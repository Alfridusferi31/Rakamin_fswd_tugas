
/* 1. Buat 100 random value => Math.round && Math.random
*      a. declare variable array
*      b. for loop, index = 0; index < 100, increment
*      c. arr.push(Math.round(Math.random) * 100) + 1
*      d. return arr
*/
function generateRandomArray() {
    let arr = [];
    for (let index = 0; index < 100; index++) {
        arr.push(Math.round(Math.random() * 100) + 1);
    }
    return arr;
}

/*2. Memecah 2 array:
 *      a. decalare array_ganjil
 *      b. declare array_genap
 *      c. for loop, index = 0; index < arr.length; increment++
 *      d. kondisi if index % 2 == 0 return {
 *          arr_genap.push(arr[index])
 *      } else (arr_ganjil.push(arr[index]))
 */ 
function separateEvenOddArray(arr) {
    let arrayGenap = [];
    let arrayGanjil = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            arrayGenap.push(arr[index]);
        } else {
            arrayGanjil.push(arr[index]);
        }
    }
    return { arrayGenap, arrayGanjil };
}

/*3. Min & Max Calculation :
 *  A. Get Max without using Math.max
 *      a. declare function getMax/findMax
 *      b. declare variable max = arr[0]
 *      c. for loop, index = 0; index < arr.length; increment++
 *      d. if (max < arr[index]) {
 *         max = arr[index]
 *      }
 *  B. Get Min without using Math.min
 *      a. declare function getMin/findMin
 *      b. declare variable min = arr[0]
 *      c. for loop, index = 0; index < arr.length; increment++
 *      d. if (min > arr[index]) {
 *         min = arr[index]
 *      }
 */
function findMax(arr) {
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index]) {
            max = arr[index];
        }
    }
    return max;
}
function findMin(arr) {
    let min = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index];
        }
    }
    return min;
}

/* 4. Calculate Total
*      a. declare function total, params = arr
*      b. declare variable total
*      c. for loop, index = 0; index < arr.length; increment++ {
*          total += arr[index]
*         }
*          return total
* total_arr_genap = total(arr_genap);
* total_arr_ganjil = total(arr_ganjil);
*/
function calculateTotal(arr) {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        total += arr[index];
    }
    return total;
}

// 5. Menghitung rata-rata
function calculateAverage(total, length) {
    return total / length;
}

// 6. Komparasi Perbandingan Min & Max, Total, dan Rata-rata
function compareArrays(arr1, arr2) {
    let result = [];

    // Perbandingan nilai max
    if (findMax(arr1) === findMax(arr2)) {
        result.push("Nilai maksimum sama");
    } else if (findMax(arr1) > findMax(arr2)) {
        result.push("Nilai maksimum array genap lebih besar");
    } else {
        result.push("Nilai maksimum array ganjil lebih besar");
    }

    // Perbandingan nilai min
    if (findMin(arr1) === findMin(arr2)) {
        result.push("Nilai minimum sama");
    } else if (findMin(arr1) < findMin(arr2)) {
        result.push("Nilai minimum array genap lebih kecil");
    } else {
        result.push("Nilai minimum array ganjil lebih kecil");
    }

    // Perbandingan total
    if (calculateTotal(arr1) === calculateTotal(arr2)) {
        result.push("Total sama");
    } else if (calculateTotal(arr1) > calculateTotal(arr2)) {
        result.push("Total array genap lebih besar");
    } else {
        result.push("Total array ganjil lebih besar");
    }

    // Perbandingan rata-rata
    if (calculateAverage(calculateTotal(arr1), arr1.length) === calculateAverage(calculateTotal(arr2), arr2.length)) {
        result.push("Rata-rata sama");
    } else if (calculateAverage(calculateTotal(arr1), arr1.length) > calculateAverage(calculateTotal(arr2), arr2.length)) {
        result.push("Rata-rata array genap lebih besar");
    } else {
        result.push("Rata-rata array ganjil lebih besar");
    }

    return result;
}

let array100 = generateRandomArray();
let { arrayGenap, arrayGanjil } = separateEvenOddArray(array100);

console.log("Array Genap:", arrayGenap);
console.log("Array Ganjil:", arrayGanjil);

console.log("Statistik Array Genap:");
console.log("Nilai Maksimum:", findMax(arrayGenap));
console.log("Nilai Minimum:", findMin(arrayGenap));
console.log("Total:", calculateTotal(arrayGenap));
console.log("Rata-rata:", calculateAverage(calculateTotal(arrayGenap), arrayGenap.length));

console.log("Statistik Array Ganjil:");
console.log("Nilai Maksimum:", findMax(arrayGanjil));
console.log("Nilai Minimum:", findMin(arrayGanjil));
console.log("Total:", calculateTotal(arrayGanjil));
console.log("Rata-rata:", calculateAverage(calculateTotal(arrayGanjil), arrayGanjil.length));

console.log("Perbandingan antara Array Genap dan Ganjil:");
console.log(compareArrays(arrayGenap, arrayGanjil));
