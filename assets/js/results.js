function moveBar(n) {
    n -= 1;
    document.getElementById("active-slider").style.transform = "translate(calc(" + (100 * n) + "% + " + (n * 2) + "px), 0px)";
    for (var i = 0; i < document.getElementsByClassName("items")[0].children.length; i++) {
        document.getElementsByClassName("items")[0].children[i].classList.remove("active");
    }
    document.getElementsByClassName("items")[0].children[n].classList.add("active");
}


function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function setState(evt) {
    var name = evt.currentTarget.id;
    name = name.replace(/_/g, " ");
    name = capitalizeWords(name);

    if (evt.currentTarget.classList.contains("nodata")) {
        document.getElementById("state-text").innerHTML = "No raw source data available for " + name;
    }
    else if (evt.currentTarget.classList.contains("noresults")) {
        document.getElementById("state-text").innerHTML = "No community algorithm results for " + name;
    }
    else if (evt.currentTarget.classList.contains("at-large")) {
        document.getElementById("state-text").innerHTML = name + " is an at-large district, no data to display.";
    }
    else {
        document.getElementById("state-text").innerHTML = "Results and data for " + name + ":";
    }

    document.getElementById("map-data").setAttribute("data", "assets/images/states/" + evt.currentTarget.id + "/precinct.svg");
}

for (var i = 0; i < document.getElementsByTagName("path").length; i++) {
    document.getElementsByTagName("path")[i].addEventListener("click", setState, false);
}
