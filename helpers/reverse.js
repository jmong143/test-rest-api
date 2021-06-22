function wordsReverser(string){
    return string.split(' ').map(function(word) { 
        var rev = word.split('').reverse().join('');
        if (['.',','].indexOf(rev[0]) > -1) {
          rev = rev.slice(1) + rev[0];
        }
        return rev;
    }).join(' ');
}

export default wordsReverser;