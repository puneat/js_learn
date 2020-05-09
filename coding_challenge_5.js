var trip = new Object();
trip.bill=[124,48,968,980,42];
trip.tips=[];
trip.final=[];
trip.calctip = function()
{
    for(var i =0; i<this.bill.length;i++)
    {
        if (this.bill[i]<50)
        {
            this.tips.push((this.bill[i]*0.2));
        }
        else if (this.bill[i]>50 && this.bill[i]<200)
        {
            this.tips.push((this.bill[i]*0.15));
        }
        else
        {
            this.tips.push((this.bill[i]*0.1));
        }
    }
};
trip.calcFinalBill = function()
{
    for(var i =0; i<this.bill.length;i++)
    {
        this.final.push((this.bill[i]+this.tips[i]));
    }
};

var markTrip = new Object();
markTrip.bill=[77,475,110,45];
markTrip.tips=[];
markTrip.final=[];
markTrip.calctip = function()
{
    for(var i =0; i<this.bill.length;i++)
    {
        if (this.bill[i]<100)
        {
            this.tips.push((this.bill[i]*0.2));
        }
        else if (this.bill[i]>100 && this.bill[i]<300)
        {
            this.tips.push((this.bill[i]*0.1));
        }
        else
        {
            this.tips.push((this.bill[i]*0.25));
        }
    }
};
markTrip.calcFinalBill = function()
{
    for(var i =0; i<this.bill.length;i++)
    {
        this.final.push((this.bill[i]+this.tips[i]));
    }
};

trip.calctip();
trip.calcFinalBill();
console.log(trip);
markTrip.calctip();
markTrip.calcFinalBill();
console.log(markTrip);

function avgTips(family)
{
    var avg=0;
    for(var i=0;i<family.tips.length;i++)
    {
        avg = avg+family.tips[i];
    }
    avg=avg/family.tips.length;
    return avg;
}



console.log(avgTips(trip)>avgTips(markTrip)?'John family paid highest':'Mark family paid highest');