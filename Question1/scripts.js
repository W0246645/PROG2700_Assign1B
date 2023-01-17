// Write a function in JavaScript that will receive a string as a parameter and then perform the following:

// •	You don’t have to prompt for a string. Simply assign a string to a variable in your code as your starting point to use as an argument for your function.
// •	If the first and last characters of the string are the same (ignoring case), the function will return the string in reverse order.
//      Otherwise, the function will return the string with the first and last letters removed.
// •	Example: “Triscuit” returns “tiucsirT” but “Cracker” returns “racke”.

function changeString(strIn) {
    let strOut = "";
    if (strIn[0].toLowerCase() == strIn[strIn.length - 1]) {
        for (let i = strIn.length - 1; i >= 0; i--) {
            strOut += strIn[i];
        }
    } else {
        strOut = strIn.slice(1, strIn.length - 1);
    }
    return strOut;
}
console.log("Hello Console")

console.log(changeString("Triscuit"));
console.log(changeString("Cracker"));


