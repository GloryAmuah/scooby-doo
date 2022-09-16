

const scoobyDoo = str => {
    if (typeof str !== 'string') { 
        return 'Input strings only'; 
    }   

    let newStr = str.toLowerCase().split('');
    let arrWord = newStr.length;
    let regex = /[aeiou]/gi;

    for (let i = 0; i < arrWord; i++) {
        if (newStr[0].match(regex)) {
            let nothing = newStr.join('');
            return nothing;
        } else {
            let vowelIndex = newStr.indexOf(str.match(regex)[0]);
            newStr.splice(0, vowelIndex, 'r');
            return newStr.join('');
        }
    }
}

module.exports = scoobyDoo;