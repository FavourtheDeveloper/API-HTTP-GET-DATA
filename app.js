var http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            for (var i = 0; i < data.length; i++) {
                addToDoc(data[i].title);
            }
        } else {
            console.log("Failure");
        }
    } 
}
http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
http.send();

var bodyDiv = document.getElementById("space");

function addToDoc(dataVal) {
    var fresh = document.createElement('p');
    fresh.innerHTML = dataVal;
    bodyDiv.appendChild(fresh);
}