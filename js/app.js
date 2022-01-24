
//1
var nname = prompt("Enter your name: ");
console.log(nname);

//2
var Gender = prompt("Enter your Gender male / female");
console.log(Gender);
switch (Gender) {
    case "male": break;
    case "female":break ;
    default : break; 
}


//3
var age = prompt("Enter your age");
if (age <= 0) {
    alert("The age not correct ");
}


let message = "are you want to skip to the welcome message?";


let conf = "Do you want to skip to the welcome message?";
if (confirm(conf) == true) {
    if (Gender == "male")
        alert("Welcome Mr " + nname);
    else if (Gender == "female")
        alert("Welcome Mrs " + nname);
    else
        alert("Welcome " + nname);
}


///////////////////////////////////////////////////////////////////////////////////

// var q1;
// var q2;
// var q3;
// var Rarray = new array();


// function AskUser(q1) {
//     let q1 = prompt("Do you love Mansaf?");
//     IsEmpty(q1);
//     return q1;
// }
// function IsEmpty(q1) {
//     if (!EmptyEnter(q1)) {
//         alert = "Invalid";
//     }
//     if (!EmptyEnter(q1)) {
//         alert = "Invalid";
//     }
//     if (!EmptyEnter(q1)) {
//         alert = "Invalid";
//     }
// }

// function EmptyEnter(p1) {
//     if (p1 != null) {
//         return true;
//         // document.getElementById("demo").innerHTML =
//         // "Hello " + person + "! How are you today?";
//     }
//     else return false;
// }

// function PutResultInArray(p1, p2, p3) {
//     Rarray = [p1, p2, p3];
// }

// function PrintArray() {
// for(var x=0;x<=3;x++)
// {
//     console.log(Rarray[x]);
// }
// }

// q1=AskUser(q1);
// q2=AskUser(q2);
// q3=AskUser(q3);
// PutResultInArray(p1, p2, p3);
// PrintArray();