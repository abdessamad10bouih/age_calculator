var btn = document.getElementById("btn");
var bdate = document.getElementById("day");
var bmonth = document.getElementById("month");
var byear = document.getElementById("year");
var date = document.getElementById("date2");
var month = document.getElementById("month2");
var year = document.getElementById("year2");
var age = document.getElementById("yerres");
var days = document.getElementById("dayres");
var months = document.getElementById("monres");
var today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

btn.addEventListener('click', function(event) {
    event.preventDefault();

    var by = parseFloat(byear.value);
    var bm = parseFloat(bmonth.value);
    var bd = parseFloat(bdate.value);
    var ty = parseFloat(year.value);
    var tm = parseFloat(month.value);
    var td = parseFloat(date.value);

    if (td < bd) {
        days.innerHTML = (td - bd + 30);
        tm = tm - 1;
    } else {
        days.innerHTML = (td - bd);
    }

    if (tm < bm) {
        months.innerHTML = (tm - bm + 12);
        ty = ty - 1;
    } else {
        months.innerHTML = (tm - bm);
    }

    age.innerHTML = (ty - by);
});
