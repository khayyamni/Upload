"use strict"


// let dropElem = document.getElementById("drop-elem");
// let dragElems = document.querySelectorAll(".drag");



// dragElems.forEach(dragElem => {
   
    
//     dragElem.ondragstart = (e) => {
//         let id = e.target.getAttribute("id");
//         e.dataTransfer.setData("id", id);  
//     }
    
    
//     dropElem.ondragover = (e) => {
//         e.preventDefault();
//     }
    
    
//     dropElem.ondrop = (e) => {
//         let id = e.dataTransfer.getData("id")
//         let elem = document.getElementById(id)
//         e.target.append(elem)
//     }


// });




let fileInput = document.querySelector(".file-input")

let tableBody = document.querySelector(".table-area .table tbody");

let table = document.querySelector(".table")

let fileAlert = document.querySelector(".file-alert")

let clearBtn = document.querySelector(".btn")

let uploadIcon = document.querySelector(".icon i")


uploadIcon = addEventListener("click", function(){
    // fileInput.click();
})

fileInput.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {

            let base64Img = e.currentTarget.result;
            tableBody.innerHTML += `<tr>
            <td><img src="${base64Img}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} kb</td>
            </tr>`
        }

        fileReader.readAsDataURL(file)
    }
    table.classList.remove("d-none")
    fileAlert.classList.add("d-none")
    clearBtn.classList.remove("d-none")
})


clearBtn.addEventListener("click", function(){
    tableBody.innerHTML="";
    table.classList.add("d-none");
    this.classList.add("d-none");
    fileAlert.classList.remove("d-none");
    fileInput.value="";
})



document.querySelector(".datetime-input").addEventListener("change", function(e){
    // let date = Date.parse(e.target.valie)
    // console.log( typeof date);

    // let date = new Date(e.target.value)
    // console.log(date);

    let date = new Date(e.target.value)
    console.log(typeof date);

})