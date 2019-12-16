function fn(str: string): string{
    let strReverse: string = str.split('').reverse().join('');
    if (strReverse == str) {
      return 'yes';
    } else {
      return 'no';
    }
}



function fib(num: number): Array<number> {
    let arr: Array<number> = [1];
    for (let i: number = 1; i <= num; i = arr[arr.length - 1] + arr[arr.length - 2]) {
        arr.push(i);
    }
    return arr;
}
