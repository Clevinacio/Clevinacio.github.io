//function that populate name of ubs
function populateName() {
    let name = localStorage.getItem("name");
    document.getElementById("ubs-name").innerHTML = name;
}

populateName();