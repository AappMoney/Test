function replaceStr(str) {
    if(typeof(str) != 'string'){
        return "Not fount";
    }else{
        let strrLetter = str.trim().split("");
        let lastLetter = strrLetter[strrLetter.length - 1].charCodeAt(0);
        let resultarr = [];

        if(lastLetter === 122) {
            return "A";
        }
        else{
            resultarr.push(String.fromCharCode(lastLetter + 1));
            return strrLetter.join("") + resultarr;
        } 
            
    }
}


console.log(replaceStr("abc"));
