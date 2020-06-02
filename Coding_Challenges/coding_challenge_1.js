// BMI=mass/height^2;

var massJohn=prompt('ENTER MASS OF JOHN');
var massMark=prompt('ENTER MASS OF MARK');
var heightJohn=prompt('ENTER HEIGHT OF JOHN');
var heightMark=prompt('ENTER HEIGHT OF MARK');

var bmiMark, bmiJohn;

bmiMark=massMark/(heightMark*heightMark);
bmiJohn=massJohn/(heightJohn*heightJohn);
console.log('BMI Mark'+bmiMark);
console.log('BMI John'+bmiJohn);
console.log("Is Mark's BMI higher than John's? "+ (bmiMark>bmiJohn) );
