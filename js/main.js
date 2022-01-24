
const text = document.getElementById("text");
const deletex = document.getElementById("delete");
const ul = document.getElementById("Todolist");
const button = document.getElementById("button");
const button2 = document.getElementById("button2")
function deleteTodo(str){
    const done = document.getElementsByClassName("done");
    const doneli = done[0];
    if(done.length == 1){
        if(confirm(str+"を削除します")){
                doneli.remove();
        }else{
            return;
        }   
        
     }else{
         alert("todoが複数個チェックされています")
     }
     console.log(doneli)
    }
   

button.addEventListener("click",()=>{
    if(text.value !==""){
        createTodo();
    }else{
        alert("todoを入力してください")
    }
  
})
function createTodo(){
const li = document.createElement("li");
const span = document.createElement("span");
const cbutton = document.createElement("input");
const checkbox = document.createElement("input");
cbutton.setAttribute("type","button");
cbutton.setAttribute("class","kesu");
checkbox.setAttribute("type","checkbox");

checkbox.addEventListener("change",()=>{
    li.classList.toggle("done")
})

cbutton.value= "削除";
span.textContent = text.value;
li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(cbutton);

ul.appendChild(li);

cbutton.addEventListener("click",()=>{
    if(li.classList.contains("done")){
        deleteTodo(span.textContent);
    }else{
        alert("todoがチェックされていません")
    }
})
console.log(span)
}


