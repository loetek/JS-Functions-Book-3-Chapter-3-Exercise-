let bandNumber = 1;
let i = 0;

const takeNumber = function (bandName) {
    
    let message = `${bandNumber} . ${bandName}`;
    i++;
    bandNumber += i;
    return message;
    
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
}
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
