function func(arr) {
    let first = [];
    let second = [];
    let total=0
    for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === arr.length && arr[i] % 2 === 0) {
    first.push(arr[i]);
    } else {
    second.push(arr[i]);
    }
    }
    return total=first+second
    }
    
    console.log(func([1, 2, 3, 4, 5, 6, 7])); 