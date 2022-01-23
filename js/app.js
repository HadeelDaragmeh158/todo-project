
//1
var nname = prompt("Enter your name: ");
console.log(nname);

//2
var Gender = prompt("Enter your Gender male / female");
console.log(Gender);
switch (Gender) {
    case "male": break;
    case "female": break;
    default: {
        alert("Enter the correct Gender male or female");
    }
}

//3
var age = prompt("Enter your Gender");
if (age <= 0) {
    alert("The age not correct ");
}


let message = "are you want to skip to the welcome message?";
if (confirm(message) == true) {
    message = alert("Welcome Mr/Ms" + nname);
}
else {
    message = alert("Welcome  " + nname);

}

let conf = "Do you want to skip to the welcome message?";
if (confirm(conf) == true) {
    if (Gender == "male")
        alert("Welcome Mr " = nname);
    else if (Gender == "female")
        alert("Welcome Mrs " = nname);
    else
        alert("Welcome " = nname);
}