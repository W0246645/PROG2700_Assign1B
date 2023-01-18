// Question 3	
// Write a JavaScript program to calculate the number of weeks, days, hours, minutes and seconds left until midnight on your birthday.
// •	The script does not have to prompt for your birthdate. Simply assign it to a variable and start from there.
// o	Ex: var myNextBirthday = …your code here
// •	Expected sample output (console.log()):
// o	There are 35 weeks, 3 days, 13 hours, 25 minutes, and 12 seconds until my next birthday!

function timeUntilBirthday(birthday) {
    let today = moment();

    let daysTotal = birthday.diff(today, 'days');
    let weeks = Math.floor(daysTotal / 7)
    let days = daysTotal % 7
    let hours = birthday.subtract(daysTotal, 'days').diff(today, 'hours')
    let minutes = birthday.subtract(hours, 'hours').diff(today, 'minutes')
    let seconds = birthday.subtract(minutes, 'minutes').diff(today, 'seconds')
    return `There are ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until my next birthday!`;
}

//ISO 8601 dates only. -03:00 to offset atlantic time
let birthday = moment("2023-07-26T00:00-03:00")
console.log(timeUntilBirthday(birthday));
