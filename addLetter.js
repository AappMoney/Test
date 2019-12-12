function replaceStr(str) {
    if(typeof(str) != 'string'){
        return "Not fount";
    }else{
        let strrLetter = str.trim().split("");
        let lastLetter = strrLetter[strrLetter.length - 1].charCodeAt(0);
        if(lastLetter === 122) return "A";
        else return String.fromCharCode(lastLetter + 1);
    }
}


console.log(replaceStr("a"));
