import { apiGetRequest } from "./apiHandle.js";
// create table body from xhr response and onclick
function createTableBody(response) {
  let data = JSON.parse(response);
  let table = document.getElementsByClassName("table")[0];
  let tableBody = table.createTBody();
  let tableRow = "";
  data.forEach(function (item) {
    tableRow += `<tr class="table-content">
                        <td>${item.name}</td>
                    </tr>`;
    
  });
  tableBody.innerHTML = tableRow;
    let tableRows = document.getElementsByClassName("table-content");
    for (let i = 0; i < tableRows.length; i++) {
        let newRow = tableRows[i].insertCell(1);
        newRow.appendChild(createButton(data[i].name));
    }
}

// function that redirect to ubsInfo page and save ubs name in local storage
function openUBSInfo(name) {
  localStorage.setItem("name", name);
  window.location.href = "ubsInfo.html";
}

function createButton(name) {
    let button = document.createElement("button");
    button.className = "btn btn-warning";
    button.innerHTML = `<span style="color: rgb(247,247,247);font-weight: bold;">Ver informações&nbsp;</span><i class="fas fa-external-link-alt" style="color: rgb(247,247,247);font-weight: bold;"></i>`;
    button.onclick = function() {
        openUBSInfo(name);
    }
    return button;
}

apiGetRequest("https://jsonplaceholder.typicode.com/users", createTableBody);
