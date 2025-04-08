const tables = [
    { id:"table1", name:"Table-1", total:0, items:{}},
    { id:"table2", name:"Table-2", total:0, items:{}},
    { id:"table3", name:"Table-3", total:0, items:{}},
]
const menuItems = [
    { id: "item1", name: "Biryani", price:10.0, type: "main cousre"},
    { id: "item2", name: "chapathi", price:30.0, type: "main course"},
    { id: "item3", name: "panner roti", price:20.0, type: "starter"},
]
document.addEventListener("DOMContentLoaded",()=>{
    renderMenu(menuItems);
    renderTable(tables);
});
function renderMenu(menuItems){
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    menuItems.forEach(item=>{
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.id = item.id;
        menuItem.dataset.name = item.name;
        menuItem.dataset.type = item.type;
        menuItem.dataset.price = item.price;
        menuItem.draggable = true;
        menuItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)}-${item.type}</p>`;
        menuContainer.append(menuItem);
        menuItem.addEventListener("dragstart", dragstart)
    });
};
function renderTable(tables){
    const tableContainer = document.getElementById("tables-container");
    tableContainer.innerHTML = "";
    tables.forEach(table=>{
        const tableCard = document.createElement("div");
        tableCard.className = "table-card";
        tableCard.id = table.id;
        tableCard.innerHTML = `
        <h4>${table.name}</h4>
        <p>Total:${table.total.toFixed(2)}</p>
        <p>Items:${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}</p>`;
        tableCard = addEventListener("click", () => showOrderDetails(table.id));
        tableContainer.append(tableCard);
        tableCard.addEventListener("dragover",dragover);
        tableCard.addEventListener("drop", dropItem);
    });
};
function showOrderDetails(tableId){
    const table=tables.find(table=>table.id === tableId);
}
function dragstart(e){
    e.dataTransfer.setData("text/plain", e.target.id)
}
function dragover(e){
    e.preventDefault();
}
function dropItem(e){
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text");
    const itemElement = document.getElementById(itemId);
    const itemName = itemElement.dataset.name;
    const itemPrice = parseFloat(itemElement.dataset.price);
    const tableId = e.target.id;
    if(itemName && itemPrice && tables.find(table => table.id ===tableId)){
        addItemToTable(tableId,itemName,itemPrice);
    }
}
function addItemToTable(tableId, itemName, itemPrice){
    const table =tables.find((table) => table.id === tableId)
    if(!table.items[itemName]){
        table.items[itemName] = {quantity: 0, price: itemPrice};
    }
    table.items[itemName].quantity++;
    table.total = table.total+itemPrice;
    const tableCard = document.getElementById(tableId);
    tableCard.querySelector("p").textContent = `Total: ${table.total.toFixed(2)}`
    tableCard.querySelector("p:nth-of-type(2)").innerText = `Items: ${Object.values(table.items).reduce((a,b)=>a+b.quantity,0)}`
}
