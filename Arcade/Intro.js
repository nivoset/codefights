function longestWord(text) {
    return text.match(/(\w+)/g).sort(function(prev,current){
        return prev.length < current.length? 1: -1;
    })[0];
}

function validTime(time) {
    time = time.split(':');
    if (time[0] > 23) {
        return false;
    } else if (time[1] > 59) {
        return false;
    } else {
        return true;
    }
}

function sumUpNumbers(inputString) {
    try {
    return parseInt(inputString.match(/(\d+)/g).reduce(function (acc, cv) {
        return (parseInt(acc)+parseInt(cv));
    }));
    } catch (e) {
        return 0;
    }
}
