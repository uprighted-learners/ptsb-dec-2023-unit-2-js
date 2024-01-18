var series = [0, 1];

while (series.length < 10) {
    // const lastNum = series[series.length - 1]
    // const secondLastNum = series[series.length - 2]
    // series.push(lastNum + secondLastNum)

    // or the same thing in one line:
    // series.push(series[series.length - 1] + series[series.length - 2])

    const lastNum = series.pop()
    const secondLastNum = series.pop()

    series.push(secondLastNum, lastNum, lastNum + secondLastNum)
}

// Print the Fibonacci sequence to the console
console.log(series.join(', '));
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34


/* 
    TODO:
    * √ set the condition for the while loop
        * √ array has 10 numbers in it
    * √ add the fibonacci numbers
        * √ figure out the next number (sum of previous two)
        * √ push to list
    * √ stretch goal: pretty printing
 */
