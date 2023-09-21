"use strict";


let fileInput = document.querySelector(".file-input");

let tableBody = document.querySelector(".table-area .table tbody")

let table = document.querySelector(".table-area .table")

let fileAlert = document.querySelector(".alert-file")

let clearButton = document.querySelector(".button")

let uploadIcon = document.querySelector(".icon i")



uploadIcon = addEventListener("click", function () {
    fileInput.click();
    
})

fileInput.addEventListener("change", function (e) {
    for (const file of fileInput.files) {
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {

            let base64Img = e.currentTarget.result;

            tableBody.innerHTML += `<tr>
            <td><img src="${base64Img}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} kb</td>
            </tr>`
        }

        fileReader.readAsDataURL(file);
    }
    table.classList.remove("d-none")
    fileAlert.classList.add("d-none")
    clearButton.classList.remove("d-none")
})


clearButton.addEventListener("click", function () {
    tableBody.innerHTML = "";
    table.classList.add("d-none");
    this.classList.add("d-none");
    fileAlert.classList.remove("d-none");
    fileInput.value = "";
})
