const obj = ["Hello","Welcome"];

for (let prop in obj) {
    addMessage(obj[prop]);
}

function submit(){
    let guestName=document.getElementById('text');
    let listData = guestName.value.split('\n');

    if (listData[0] !== "") {
        addMessage(listData[0]);
    }
}

function clearText(){
    document.getElementById("text").value = "";
}

function clearList(){
    let listContainer = document.getElementById('list');
    listContainer.innerHTML=  "";
}

function addMessage(listData){
    let listContainer = document.getElementById('list');
    let listElement = document.createElement("ul");

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML="X";

    listContainer.appendChild(listElement);

    let listItem = document.createElement("li");
    listItem.innerHTML = listData;
    listElement.appendChild(listItem);
    listElement.appendChild(deleteButton);

    deleteButton.addEventListener ("click", function() {
        listContainer.removeChild(listElement)
    });
}