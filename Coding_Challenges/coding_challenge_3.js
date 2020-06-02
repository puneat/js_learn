var bill = [124, 48, 268];

function tipCalculator(billAmt)
{
    if(billAmt<50 && billAmt>=0)
    {
        return 0.2*billAmt;
    }
    else if (billAmt>=50 && billAmt<=200)
    {
        return 0.15*billAmt;
    }
    else
    {
        return 0.1*billAmt;
    }
}


var tip=[], totalBill=[];

tip.push(tipCalculator(bill[0]));
tip.push(tipCalculator(bill[1]));
tip.push(tipCalculator(bill[2]));

totalBill.push(bill[0]+tip[0]);
totalBill.push(bill[1]+tip[1]);
totalBill.push(bill[2]+tip[2]);

console.log(bill);
console.log(tip);
console.log(totalBill);

