var colors=['white','red','pink','purple','orange','blue']
var len=colors.length-1

let buttonControl=document.getElementById('btn')
let spanControl=document.querySelector('.color')

buttonControl.addEventListener('click',()=>{
    let index=generateRandom()
    // alert(index)
    document.body.style.backgroundColor=colors[index]
    spanControl.textContent=colors[index]
})

function generateRandom(){
    return Math.round(Math.random()*len)
}