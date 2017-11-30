function longestWord(text) {
    return text.match(/(\w+)/g).sort(function(prev,current){
        return prev.length < current.length? 1: -1;
    })[0];
}
