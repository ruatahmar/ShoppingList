const ul=document.querySelector("ul");
const input=document.querySelector("input");
const button=document.querySelector("button");

button.addEventListener('click',()=>{
    const inputValue=input.value;
    input.value="";

    const li=document.createElement("li");
    const span=document.createElement("span");
    const newButton=document.createElement("button");
    
    span.textContent=inputValue;
    newButton.textContent="Delete";
    li.appendChild(span);
    li.appendChild(newButton);
    ul.appendChild(li);
    
    newButton.addEventListener('click',()=>{
        ul.removeChild(li);
    
    });
    input.focus();
});

