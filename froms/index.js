document.querySelector("form").addEventListener("submit",todolist);
function todolist(){
    event.preventDefault();
    let itemName = document.querySelector("#name").value;
    let Quantity = document.querySelector("#qty").value;
    let Priority = document.querySelector("#priority").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = itemName;
    let td2 = document.createElement("td");
    td2.innerText = Quantity;
    let td3 = document.createElement("td");
    td3.innerText = Priority;
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);
    document.querySelector("#name").value = "";
    document.querySelector("#qty").value = "";
}

