let todoList=document.getElementById('todolist')

//function to add item
function addItem(){
   let input= document.getElementById('todoinput').value
   if(input !== ""){
    let listItem=document.createElement('li')
    listItem.innerHTML=input
    todoList.appendChild(listItem)
   }
   else{
    alert("please enter the task")
   }
}

//function to remove last item
function removeItem(){
    let lastItem=todoList.lastChild
    if(lastItem){
        todoList.removeChild(lastItem)
    }
    else{
        alert("No items to remove")
    }
}