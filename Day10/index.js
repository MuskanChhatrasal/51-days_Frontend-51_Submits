//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");

let file;

button.onclick = ()=>{
    input.click();
}

input.addEventListener("change",function(){
    file = this.files[0];
    showFile();
    dropArea.classList.add("active");
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload Files";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile(){
    let fileType = file.type;

    let validExtentions = ["image/jpeg","image/jpg","image/png"];
    if(validExtentions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);

    }else{
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
    }
}