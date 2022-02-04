function encodeAndDecodeMessages() {
    
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'));
    const firstTxt = document.getElementsByTagName('textarea')[0];
    const secondTxt = document.getElementsByTagName('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e){
        const encodeStr = [];
        let text = firstTxt.value;
        for(let i = 0; i < text.length; i++){
            let ch1 = text.charCodeAt(i)
            encodeStr.push(String.fromCharCode(ch1+1));
        };

        firstTxt.value = '';

        secondTxt.value = encodeStr.join('');
    }

    function decode(e){
        let decodeStr = [];
        let text2 = secondTxt.value;
        for(let i = 0; i < text2.length; i++){
            let ch2 = text2.charCodeAt(i)
            decodeStr.push(String.fromCharCode(ch2-1));
        };
        secondTxt.value = decodeStr.join('');
    }
}