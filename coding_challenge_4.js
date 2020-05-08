var bmiJohn =
{
    firstName: 'John',
    lastName: 'Smith',
    calcName: function()
    {
        this.fullName=this.firstName+' '+this.lastName;
        return this.firstName+' '+this.lastName;
    },
    mass:110,
    height:1.95,
    calcBmi: function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.mass/(this.height*this.height);
    } 
}
var bmiMark =
{
    firstName: 'Mark',
    lastName: 'Rogers',
    calcName: function()
    {
        this.fullName=this.firstName+' '+this.lastName;
        return this.firstName+' '+this.lastName;
    },
    mass:78,
    height:1.69,
    calcBmi: function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.mass/(this.height*this.height);
    } 
}

console.log('BMI of '+bmiMark.calcName()+' is '+ bmiMark.calcBmi());
console.log('BMI of '+bmiJohn.calcName()+' is '+ bmiJohn.calcBmi());

function highestBmi(john,mark)
{
    if(john.bmi<mark.bmi)
    {
        console.log('Highest BMI is of '+mark.fullName+' with a BMI of '+mark.bmi);
    }
    else if(john.bmi>mark.bmi)
    {
        console.log('Highest BMI is of '+john.fullName+' with a BMI of '+john.bmi);
    }
    else
    {
        console.log('Both have the same BMI');
    }
}
highestBmi(bmiJohn, bmiMark);