
// JS on each Gameboard field.
var grid = document.getElementsByClassName('grid');

var i;
for (i = 0; i < grid.length; i++) {
    grid[i].addEventListener("click", function() {  
document.getElementsByClassName("grid-element").innerHTML = "X"; })};