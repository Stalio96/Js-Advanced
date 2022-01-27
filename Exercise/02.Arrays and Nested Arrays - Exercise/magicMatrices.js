function magicMatrices(matrix) {

    let sum = matrix[0][0] + matrix[0][1] + matrix[0][2];
    let isEqualRow = true;
    let isEqualCol = true;

    for (let i = 0; i < 3; i++) {
        let equalR = 0;
        for (let j = 0; j < 3; j++) {
            equalR += matrix[i][j]
        }
        if (sum != equalR) {
            isEqualRow = false;
        }
    }

    for (let i = 0; i < 3; i++) {
        let equalC = 0;
        for (let j = 0; j < 3; j++) {
            equalC += matrix[j][i];
        }
        if (sum != equalC) {
            isEqualCol = false;
        }
    }

    if (isEqualCol == true && isEqualRow == true) {
        console.log(true);
    } else {
        console.log(false);
    }
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);