function extract(content) {

    let text = document.getElementById(content).textContent;

    let reg = /\((.+?)\)/g;

    let match = reg.exec(text);

    let result = '';

    while (match != null) {
        result += match[1];
        result += '; ';

        match = reg.exec(text);
    }

    return result;
}