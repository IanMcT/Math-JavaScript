/*
Ian McTavish
Sept 14, 2022
Math
*/
var x, y, z;
var xd, yd, zd;
var output = "";
x = 4;
y = 3;
xd = 4.0;
yd = 3.0;
z = x+y;
output = "x+y="+z;

z = x-y;
output += "<br />x-y=" + z;

z = x*y;
output += "<br />x*y=" + z;

z = x/y;
output += "<br />x/y=" + z;
z = parseInt(x/y);
output += "<br />parseInt(x/y)=" + z;

z = x%y;
output += "<br />x%y="+z;

z = x**y;
output += "<br />x**y="+z;
z = Math.pow(x,-y);
output += "<br />Math.pow(x,-y)="+z;

zd = xd+yd;
output += "<br />xd+yd="+zd;

zd = xd-yd;
output += "<br />xd-yd=" + zd;

zd = xd*yd;
output += "<br />xd*yd=" + zd;

zd = xd/yd;
output += "<br />xd/yd=" + zd;

zd = xd/yd;

output += "<br />parseDouble(xd/yd)=" + zd;

zd = xd%yd;
output += "<br />xd%yd="+zd;

zd = xd**yd;
output += "<br />xd**yd="+zd;
zd = Math.pow(xd,-yd);
output += "<br />Math.pow(xd,-yd)="+zd;

document.getElementById("output").innerHTML = output;
