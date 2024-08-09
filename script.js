const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return this.title + " by " + this.author +", "+ this.read;
    }
}
// const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
// console.log(theHobbit.info());


// create a dialog window
function myDialog (){
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");
    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
    dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
    dialog.close();
    });
}
myDialog ()

// take the form input and add it as an object to myLibrary
let bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    // store radio input value in var read
    let read = document.querySelector('input[name="status"]:checked').value;

    if (title.value == "" || author.value == "" || pages.value =="") {
        alert("Ensure you input a value in both fields!");
    } 
    else {
        let newBook = new Book (title.value, author.value, pages.value, read);
        myLibrary.push(newBook);
        addRow(newBook);
    } 

    // closes dialog when presing sumbit button
    // const dialogClose = document.querySelector("dialog");
    // const submitButton = document.getElementById("submitButton");
    // submitButton.addEventListener("click", () => {
    //     dialogClose.close();
    //     });
 
});


// add new Book's values to the table
function addRow (newBook){
    let tableBody = document.getElementById("tableBody");
    let row = tableBody.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // create delete button
    let delBtn  = document.createElement("BUTTON");
    let delText = document.createTextNode("delete");
    delBtn.appendChild(delText);
    

    //create read button
    let read = document.createElement("BUTTON");
    let readText = document.createTextNode(newBook.read);
    read.appendChild(readText);
    
   
    //putting input value in the cell
    cell1.innerHTML = newBook.title;
    cell2.innerHTML = newBook.author;
    cell3.innerHTML = newBook.pages;
    cell4.appendChild(read);
    cell5.appendChild(delBtn);

    if (newBook.read === "Yes") {
        read.classList.add("book-status", "read");
    } else {
        read.classList.add("book-status", "not-read");
    }

    //doesnt work, requires double click
    // read.setAttribute("onclick", "readStatus()")

    // Add the event listener to toggle read status
    read.addEventListener("click", function() {
        if (read.classList.contains("not-read")) {
            read.classList.remove("not-read");
            read.classList.add("read");
            read.textContent = "Yes";
        } else {
            read.classList.remove("read");
            read.classList.add("not-read");
            read.textContent = "No";
        }
    });

    // delete a row
    delBtn.addEventListener("click", function(){
        tableBody.deleteRow(this);
        // row.remove(); works too!

    })
    
}



