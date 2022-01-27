function sortAnArrayBy2Criteria(array) {

    let sorted = array.sort((a, b) => {
        let lenA = a.length;
        let lenB = b.length;

        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']


)