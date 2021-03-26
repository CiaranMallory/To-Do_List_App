
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const input = document.querySelector("#todo");

// This function adds list elements when the add button is clicked
btn.addEventListener('click', () => {
    
    var txt = document.getElementById('todo').value;
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        li.setAttribute("class", "listitems");
        button = document.createElement("BUTTON");
        button.innerHTML = "Delete";
        button.setAttribute("class", "delete");
        li.appendChild(button);
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
    
})

// This function allows deletion of list items
function deleteItems() {

    var listitems = document.querySelectorAll(".listitems");
    for (var index = 0; index < listitems.length; index++){
        listitems[index].addEventListener("click", function(){
            this.classList.toggle("active");
        });
        listitems[index].querySelector(".delete").addEventListener("click",
        function(){
            this.closest(".listitems").remove();
        });
    }

}

// Calls the delete function every second
setInterval(deleteItems, 1000);