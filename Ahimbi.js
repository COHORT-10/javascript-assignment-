// Here, we are basically creating a function 'test' with 2 parametres

function tests(test1,test2)
{
//  variable has been declared with a formular as its value
let greater = test2>test1?test1:test2;
// Here we are basically instructing the function to return the answer of the value assigned to the variable 'greater' 
return greater

}

// Here, we are basically creating a function 'coursework' with 1 parametres
function coursework(cswork)
{
 
// in line 18, we have assigned a value to a variable 'coursework' and this value is to be added to
// function 'tests' which now has parameters identified

let coursework = cswork + tests(80,80);
 
console.log(coursework); 

//Here we are basically running the console and calling out 'coursework' NB: Not so sure but something seems wrong
 
return coursework

 
} // here we are basically calling a return on 'coursework'. 


// a function with 1 parameter has been created
function avg(a)
{

// Here we are basically declaring a variable whose value 'course work' has now been given a known parameter
//which is now to be divided by the parameter of function 'avg'
let avg =coursework(90)/a;

//here we are basically calling a return on 'avg'.
return avg

}

// a function with 1 parameter has been created
function crsmark(a)
{
// we have declared a variable with the vaule returned by 'avg' that has 2 as parameter this will then be
//  multipled by the answer of 'a' divided by 100

let exm = avg(2)*(a/100)

 return exm
}

// we have again created a function with 1 parameter

function exam(a)
{

// here we then have a variable whose assigned value is the answer of 60 divided by 100 and then multiplied by the 
//'a'
let fexam = (60/100)*a

//here we are calling a return on 'fexam'
return fexam

}

// we have created a function with no parameter 

function fnal()
{

//we have now declared a variable and assigned it the value of answer that arises from 
//adding exam whose parameter is 75 and crsmark whose parameter is 40

let fmark = exam(75)+crsmark(40)
// here 'fmark' has been console logged
console.log(fmark)

}

// here we are calling the function fnal 


fnal()