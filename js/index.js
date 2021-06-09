let scrollBox = document.querySelector(".scroll-box__content__secret");
let secretInput = document.querySelector(".secret__box-input");
let secretInputContent = secretInput.querySelector(".secret__box-input__content");
let secretBox = document.querySelector(".secret__box");

function getTextFile(){
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain";
    input.onchange = function(event){
        processFile(event.target.files[0]);
    }
    input.click();
}
function processFile(file){
    let reader = new FileReader();
    reader.readAsText(file,"utf-8");

    reader.onload = function(){
        secretInput.style.display = "flex";
        secretInputContent.innerText = reader.result;
        secretBox.style.display = "none";
    }
}
    secretBox.addEventListener("click",getTextFile);
