let bandNumber = 1;


const takeNumber = function (bandName) {
    
    let message = `${bandNumber} . ${bandName}`;
   
    bandNumber += 1;
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

const monkey = takeNumber("Monkey Sweat");
console.log(monkey);

const shitHead = takeNumber("Shit Head");
console.log(shitHead);
