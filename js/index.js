 function add(a, b) {
     while (a.length < b.length) a.unshift(0);
     while (a.length > b.length) b.unshift(0);
     var carry = 0,
         sum = [];
     for (var i = a.length - 1; i >= 0; i--) {
         var s = a[i] + b[i] + carry;
         if (s >= 10) {
             s = s - 10;
             carry = 1;
         }
         else {
             carry = 0;
         }
         sum.unshift(s);
     }
     if (carry) sum.unshift(carry);
     return sum;
 }

var f1=0,f2=1,f3;
var i;
alert("enter a text"+n);
 var n=prompt("enter the number");
 document.write("the fibonacci series is "+"<br/>");

   for(i=2;i<=n;i++)
   {

       f3=f1+f2;
       f1=f2;
       f2=f3;
     document.write(f3+"<br/>");   
   }