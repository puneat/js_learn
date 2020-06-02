var game1John,game2John,game3John,game1Mike,game2Mike,game3Mike;

game1John=89;
game2John=120;
game3John=103;

game1Mike=115;
game2Mike=94;
game3Mike=103;

avgJohn=(game1John+game2John+game3John)/3;
avgMike=(game1Mike+game2Mike+game3Mike)/3;

if(avgJohn>avgMike)
{
    console.log('John\'s team wins and avg score is ', avgJohn);
}
else if(avgJohn==avgMike)
{
    console.log('Both team win and avg score is ', avgJohn);
}
else
{
    console.log('Mike\'s team wins and avg score is ', avgMike);
}

var game1Mary, game2Mary, game3Mary;

game1Mary=94;
game2Mary=110;
game3Mary=105;

avgMary=(game3Mary+game2Mary+game1Mary)/3;



switch(true)
{
    case avgJohn>avgMike && avgJohn>avgMary:
        console.log('John\'s team wins and avg score is ', avgJohn);
        break;
    case avgMary>avgJohn && avgMary>avgMike:
        console.log('Mary\'s team wins and avg score is ', avgMary);
        break;
    case avgMike>avgJohn && avgMike>avgMary:
        console.log('Mike\'s team wins and avg score is ', avgMike);
        break;
    case avgMike==avgJohn && avgMike>avgMary:
        console.log('Mike and John team wins and avg score is ', avgMike);
        break;
    case avgMike==avgMary && avgMike>avgJohn:
        console.log('Mike and Mary team wins and avg score is ', avgMike);
        break;
    case avgJohn==avgMary && avgMike<avgJohn:
        console.log('John and Mary team wins and avg score is ', avgJohn);
        break;
    case avgJohn==avgMary && avgJohn==avgMike:
        console.log('All team wins and avg score is ', avgJohn);
        break;
}
