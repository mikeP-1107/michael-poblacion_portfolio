// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function skillBlock(x) {
    var y = x;
    document.getElementById("skill1").style.display = "none";
    document.getElementById("skill2").style.display = "none";
    document.getElementById("skill3").style.display = "none";
    document.getElementById("skill-set1").style.display = "none";
    document.getElementById("skill-set2").style.display = "none";
    document.getElementById("skill-set3").style.display = "none";
    document.getElementById("skill-title1").className = "";
    document.getElementById("skill-title2").className= "";
    document.getElementById("skill-title3").className = "";
    if (y == 1) {
        document.getElementById("skill-title1").className = "active-cell";
        document.getElementById("skill1").style.display = "block";
        document.getElementById("skill-set1").style.display = "block";
    }
    else if(y == 2)
    {
        document.getElementById("skill2").style.display = "block";
        document.getElementById("skill-set2").style.display = "block";
        document.getElementById("skill-title2").className = "active-cell";
    }
else{
        document.getElementById("skill3").style.display = "block";
        document.getElementById("skill-set3").style.display = "block";
        document.getElementById("skill-title3").className = "active-cell";
    }
}
function toggleSkills(x) {
    var y = x;
    document.getElementById("about").style.display = "none";
    document.getElementById("skillBlock").style.display = "none";
    if (y == 1) {
        document.getElementById("about").style.display = "none";
        document.getElementById("skillBlock").style.display = "block";
    }
    else {
        document.getElementById("about").style.display = "block";
        document.getElementById("skillBlock").style.display = "none";
    }
}