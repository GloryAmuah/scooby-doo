const scoobyDoo = str => {
    if (typeof str != 'string') { 
        return 'Input strings only'; 
    }   
    const newStr = str.toLowerCase().split(''); 
    
    const regex = /[aeiou]/g;

    const firstWord = str.match(regex);

    const vowelIndex = newStr.indexOf(firstWord[0]);
            
    newStr.splice(0, vowelIndex, 'r');
    return newStr.join('');
}

module.exports = scoobyDoo;