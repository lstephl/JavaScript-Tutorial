var today = new Date();
var hourNow = today.getHours();
var gretting;

if (hourNow > 0) 
{
    greeting = "Good Morning";
}
else if (hourNow > 12)
{
    greeting = "Good Afternoon";
}
else if (hourNow > 18)
{
    greeting = "Good Evening";
}
else 
{
    greeting = "Welcome";
}

document.write('<h3>' + greeting + '</h3>');