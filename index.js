function miniMaxSum(arr) {
    arr = arr.sort();

    let max = arr.slice(1, arr.length);
    let min = arr.slice(0, arr.length-1);

    const sumArray = array => {
        let total = array.reduce((total, num) => total + num, 0);
        return total;
    }

    let sumMax = sumArray(max);
    let sumMin = sumArray(min);

    console.log(sumMin, sumMax);
}