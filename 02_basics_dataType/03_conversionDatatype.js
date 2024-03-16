let score =33;
 console.log(typeof score);// number

 let score1="33";
 console.log(typeof score1);//string


// conversion of string  to number

 let Num=Number(score1)
 console.log(typeof Num)//number

 let val="123abc";
 let valtoNum=Number(val);
 console.log(typeof valtoNum);

 let sum=valtoNum+1; //NaN
 console.log(sum);//NaN

 //Similary ham data conversion ke liye  Boolean() and String() method use kar saKate hai: