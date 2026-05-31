const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');

generateBtn.addEventListener('click', generatePalette);

paletteContainer.addEventListener("click", function(e){
if (e.target.classList.contains("copy-btn")){
    const hexValue = e.target.previousElementSibling.textContent;
clickedButton = e.target;
    navigator.clipboard
    .writeText(hexValue)
    .then(() => showCopySuccess(clickedButton))
    .catch((err)=>console.log(err))
}

else if(e.target.classList.contains("color") ){
     const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
clickedButton = e.target.nextElementSibling.querySelector(".copy-btn");
    navigator.clipboard
    .writeText(hexValue)
    .then(() => showCopySuccess(clickedButton))
    .catch((err)=>console.log(err))
}
});
function showCopySuccess(button){
  button.classList.remove("fa-copy");
  button.classList.add("fa-check");

  setTimeout(()=>{
button.classList.remove("fa-check");
button.classList.add("fa-copy");
button.style.color = "";
},1350);
}

function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }

  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(colors){
const colorBoxes = document.querySelectorAll(".color-box");

colorBoxes.forEach((box, index)=>{
const color = colors[index];
const colorDiv = box.querySelector(".color");
const hexValue = box.querySelector(".hex-value");

colorDiv.style.backgroundColor = color;
hexValue.textContent = color;
});
}

generatePalette();