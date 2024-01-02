let one = new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

let two = [...new Set('referee')].join(''); // 'ref'

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// sets them seperately, as arrays are independantly made

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;
console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

// vowelCount
const isVowel = char => 'aeiou'.includes(char);

function vowelCount(str){
    const vowelMap = new Map();
    for (let Char of str){
        let char = Char.toLowerCase();
        if (isVowel(char)){
            if (vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) + 1)
            } else {
                vowelMap.set(char, 1);
            }
        } 
    }
    return vowelMap;
}