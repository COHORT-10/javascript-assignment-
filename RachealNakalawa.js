//Defining a dynamic function tests with 2 parameters test1 and test 2.

function tests(test1,test2)
{
//Ternary ? operator is checking the condition if test2 is greater than test1.If true assign test1 to greater if false assign test2 to greater 
//But assuming u want the variable greater to actually be the value that is the bigger of the 2,that is test1 and test2, then u would write greater = test2>test1?test2:test1.
let greater = test2>test1?test1:test2

//This returns the value of the variable greater to make it accessible outside of the function tests()
return greater

}

//Defining a dynamic function coursework with one parameter cswork.
 function coursework(cswork)
 {
 
 //Declaring a local variable coursework and assigning it the  value you get when you add the parameter cswork to  the value returned when the function  tests is passed with arguments 80 for test1 and 80 for test2 ie the returned value of the variable greater in function tests.
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 
 //This returns the value of the variable coursework to make it accessible outside of the function coursework().
 return coursework
 
 //This was an error since the closing brace of the function coursework was missing.I fixed it by adding the closing brace below.
 }
 
 //Defining a dynamic function avg with one parameter a.
function avg(a)
{

//Declaring a local variable avg and assigning it the calculated  value returned when the function coursework() is passed with the argument 90 --(the returned value of the local variable coursework in function coursework) divided by the parameter a of function avg().
let avg = coursework(90)/a

//This returns the value of the variable avg to make it accessible outside of the function avg()
return avg

}

//Defining a dynamic function crsmark with one parameter a.
function crsmark(a)
{
//Declaring a variable exm and assigning it the calculated value returned when the function avg() is passed with the argument 2 ie the value of the variable avg multiplied  by the the value you get when u divide parameter a of function crsmark() by 100.
let exm = avg(2)*(a/100)

//This returns the value of the variable exm to make it accessible outside of the function crsmark().
 return exm
}

//Defining a dynamic function exam with one parameter a.
function exam(a)
{

let fexam = (60/100)*a

//This returns the value of the variable fexam to make it accessible outside of the function exam().
return fexam

}

//Defining a static function fnal with no parameters
function fnal()
{

//Declaring a local variable fmark and assigning it the calculated value returned when the function exam() is passed with the argument 75 --(the value of the variable fexam) plus the value returned when the function crsmark() is passed with argument 40 --(the value of the variable exm).

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//invoking the function fnal

fnal()


/**

**/
