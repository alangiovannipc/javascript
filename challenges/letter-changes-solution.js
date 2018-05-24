function LetterChanges(str) {
    str = str.replace(/[a-z]/gi,function(w){
        if ((/Z|z/g).test(w)) return 'a';
        return String.fromCharCode(w.charCodeAt(0) + 1);
    })

    return str.replace(/a|e|i|o|u/g,function(l){
        return l.toUpperCase();
    })
}