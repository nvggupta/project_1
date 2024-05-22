
const containers = document.getElementById("container");
console.log(containers);
const margin = document.getElementById("button2");
const background = document.getElementById("button1");

const padding = document.getElementById("button3");
const fontSize = document.getElementById("button4");
const height = document.getElementById("button5");
const width = document.getElementById("button6");
margin.addEventListener('click',()=>{
        container.style.margin = "20px"
})
background.addEventListener('click',()=>
{
    let color = "#";
    let Alphabet = "abcdef0123456789";
    for(let i = 0;i<6;i++)
        {
            let x = Alphabet[Math.floor(Math.random()*Alphabet.length)];
            color += x;
        }
        container.style.backgroundColor = color;
    console.log(color);
})
padding.addEventListener('click',()=>{
    container.style.padding = "15px";
    
})
fontSize.addEventListener('click',()=>{
    container.style.fontSize = "25px";
})
height.addEventListener('click',()=>{
    container.style.height = "25px";
})
width.addEventListener('click',()=>{
    container.style.width = "500px";
})
