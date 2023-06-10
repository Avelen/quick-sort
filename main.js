const input = document.getElementById('input');
let count = 0;
input.addEventListener('input', (e) => {
    doSort(e.target.value);
});

function doSort(elements) {
    if (elements < 500) {
        let array = generateRandomArray(elements);
        AlgrorythmComplexity(array, count);
        document.getElementById('array').innerHTML = array;
        let startTimer = performance.now();
        document.getElementById('arrayResult').innerHTML = quickSort(array);
        let EndTimer = performance.now();
        document.getElementById('time').innerHTML = EndTimer - startTimer + ' ms';
        count = 0;
    } else {
        alert('Too mush elements!');
    }
}

function generateRandomArray(short) {
    let array = [];
    for (let i = 0; i < short; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length - 1)];
    const left = [];
    const equal = [];
    const right = [];

    arr.map((element) => {
        count++;
        document.getElementById('count').innerHTML = count;
        if (element < pivot) {
            left.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            right.push(element);
        }
    });

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

function AlgrorythmComplexity(array) {
    let element = array.length;
    let result = Math.floor(element * Math.log(element));

    document.getElementById('algSum').innerHTML = result;
}

doSort(input.value);
