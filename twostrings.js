// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

s1 = 'hi'
s2 = 'world'

twoStrings(s1, s2);

function twoStrings(s1, s2) {

    let arr = [];

    for(let c of s1) {
        arr[c] = 1;
    }

    for(let s of s2) {
        if (arr[s] !== undefined){
            console.log('YES')
            return;
        }
    }

    console.log('NO')
}