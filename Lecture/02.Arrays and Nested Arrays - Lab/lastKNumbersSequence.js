function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            if (result[i - j] == undefined) {
                continue;
            } else {
                sum += result[i - j];
            }
        }
        result.push(sum)
    }

    return result;
}
lastKNumbersSequence(6, 3)