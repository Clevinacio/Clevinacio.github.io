//function that make api get request and return the response
const basicAuth = "Basic " + btoa("17411224227:adminadmin");

export function apiGetRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // xhr.setRequestHeader("Authorization", basicAuth);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}


