function areaAndVolumeCalculator(area, vol, input) {

    const parsed = JSON.parse(input);
    const arr = [];

    for (let item of parsed) {
        const cubeArea = area.apply(item);
        const cubeVol = vol.apply(item);

        arr.push({
            area: cubeArea,
            volume: cubeVol
        })
    }

    return arr;
}

const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`;
areaAndVolumeCalculator(area, vol, data);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
