/********** 
var firstName = 'john';

console.log(firstName);

var lastName ='Mishra';
var age=21;
var _job;
var fullAge=false;
//variables

sdsdsd

sds
ds
d


if (fullAge==false) {
    console.log(firstName+lastName+age);
    console.log(job);
}
*/

/***********************
 * type coercion
 * 
 * 
 * 
 

 var firstName='puneet';
 var age=21;
 console.log(firstName+' '+age);

 var job, isMarried;
 job='teacher';
 //isMarried=false;
 console.log(firstName+' is a '+age+' year old '+job+'. Is he married '+ isMarried);

 // variable mutation

 age='twenty eight';
alert(age);

var lastName=prompt('enter last name');
console.log(firstName+' '+lastName);
*/

// operators
/*
var year, yearPuneet, yearPunit;
year=2020;
var agePunit=20;
var agePuneet=21;
yearPuneet =year-agePuneet;
yearPunit=year-agePunit;


console.log(yearPuneet);
console.log(year*2);
console.log(year%3);
console.log(year/2);

//logical operators

var whoIsOlder=agePuneet<agePunit;
console.log(whoIsOlder);

//typeof operators
console.log(typeof whoIsOlder);
console.log(typeof agePuneet);
console.log(typeof 'hello')
var x;
console.log(typeof x); */

//operator precedence
/*
var now=2020;
var yearPuneet=1999;
var fullAge=22;

var isFullAge=now-yearPuneet>=fullAge;
console.log(isFullAge);
*/
/*
var firstName='puneet';
var civilStatus=true;
var engaged=true;

if(civilStatus)
{
    console.log(firstName+' is married.');
}
else if(!civilStatus && engaged)
{
    console.log(firstName+' is engaged ');
}
else
{
    console.log(firstName+' is not married.');
}
*/
/*
//ternary operator and switch statements

var firstName='puneet';
var age=24;

age>=21 ? console.log('Alcohol'):console.log('Juice')

var drink=age>=21 ?'drink is alcohol':'drink is juice';
console.log(drink);

// switch statement

var job='driver';

switch(job){
    case 'teacher':
        console.log(job); break;
    case 'driver':
        console.log(job); break;
    default:
        console.log('unemployed');
}
*/

// falsy values: undefined, null,0,'',NaN
//truthy values: NOT falsy values
/*
var height='false';

if(height==false)
{
    console.log('variable is defined');
}
else 
{
    console.log('variable has not been defined');
}

*/

// functions
/*
function calculateAge(birthYear)
{
    return 2020-birthYear;
}*/
/*
var ageJohn=calculateAge(1990);
var ageMike=calculateAge(1969);
var agePuneet=calculateAge(1999);
console.log(ageJohn,agePuneet,ageMike);

function YearsUntilRetirement(firstName, birthYear)
{
    var age=calculateAge(birthYear);
    console.log(firstName+' has '+(60-age)+' until retirement.');
}

YearsUntilRetirement('Puneet',1999);
YearsUntilRetirement('Mike',1969);
var tea= YearsUntilRetirement('John',1990);

*/

// function statements and expressions

//function declaration
//function whatDoYouDO(job, firstName){}

/*
// function expression
var whatDoYouDo = function (job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName+' teaches how to kid';
        case 'driver':
            return firstName+' drives a cab';
        default:
            return firstName +' is unemployed';
    }
}

console.log(whatDoYouDo('teacher','Puneet'));

*/

// arrays
/*
var names=['John','Mark','Jane'];
var years =  new Array(1990,1969,1989);

console.log(names);
console.log(names[2]);


names[5]='Mary';
console.log(names);

names[names.length-4]='Puneet';

console.log(names);

var john=['john', 1990, false];

console.log(john);

john.push('blue');
console.log(john);
console.log(john.pop());
console.log(john);
john.unshift('Mr.');
console.log(john);

console.log(john.indexOf(13));

var isDesigner = john.indexOf('john')===-1 ? 'not a designer' : 'is a designer';
console.log(isDesigner);

*/

// objects and properties

//object lietral
/*
var john = {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1999,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x='birthYear';
console.log(john[x]);

john.job='driver';
john['isMarried']=true;
console.log(john);

//new object syntax

var jane = new Object();
jane.firstname='Jane';
jane.birthYear=1998;
jane['lastName']='smith';
console.log(jane);

*/
/*
var john = {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age= 2020-this.birthYear;
    }
};

john.calcAge();
console.log(john);

*/

// loops and iterations 

/*

var john=['John','smith',1990,'designer',false];
john.push('blue');

for(i=0;i<john.length;i++)
{
    if(typeof john[i]!=='string') continue;
    console.log(john[i]);
}

for(i=0;i<john.length;i++)
{
    if(typeof john[i]!=='string') continue;
    console.log(john[i]);
}

i=0;
while(i<john.length)
{
    console.log(john[i]);
    i++;
}
*/
// continue and break statements

var john=['John','smith',1990,'designer',false];
john.push('blue');

for(i=john.length-1;i>=0;i--)
{
    if(typeof john[i]!=='string') continue;
    console.log(john[i]);
}

for(i=0;i<john.length;i++)
{
    if(typeof john[i]!=='string') break;
    console.log(john[i]);
}

