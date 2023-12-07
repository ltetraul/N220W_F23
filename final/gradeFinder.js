let scale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, 0];

function reset() {
    let rows = document.querySelectorAll("tr");
    Array.from(rows).forEach(row => {
        row.style.backgroundColor = "";
    });
}

function highlight(percent) {
    let table = document.getElementById("table");
    for (let i = 0; i < scale.length; i += 3) {
        if (percent >= scale[i + 1] && (percent <= scale[i + 2])) {
            table.rows[Math.floor(i / 3) + 1].style.backgroundColor = "red";
            return;
        }
    }
    table.rows[5].style.backgroundColor = "red";
}


function calculate () {
    let userPoints = document.getElementById("userPoints");
    let results = document.getElementById("results");
    let points = parseInt(userPoints.value);
    if (points > 500) {
        results.innerHTML = "point total cannot exceed 500";
        reset();
        exit();
    }
    let percent = (points/500) * 100;
    results.innerHTML = "Grade Average: " + percent + "%";
    reset();
    highlight(percent);
}
