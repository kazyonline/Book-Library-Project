let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

/*function addBookToLibrary() {
  let a = prompt('Please provide:title,author,pages');
  let b = a.split(",");
  var newBook = new Book(b[0],b[1],b[2]);
  myLibrary.push(newBook);
 
}*/

function displayBook(){
  
  for (let book in myLibrary){
  
   let div = document.createElement('div');
   let p = document.createElement('p');
   p.innerHTML =  "<strong>" + "Title:" + "</strong>"+ myLibrary[book].title  + "<br>" + 
                  "<strong>" + "Author:" + "</strong>"+ myLibrary[book].author  + "<br>";
   p.id = book;    
   div.appendChild(p);

   let button = document.createElement('button');
   button.textContent = 'delete book'
   button.onclick = function() {
     delete myLibrary[p.id];
     button.style.display = 'none';
     div.style.display = 'none';
   }
   

   div.appendChild(button);
  
   
   document.body.appendChild(div);   

  }   
    
  
}

function addBookToLibrary() {
  let a = title.value;
  let b = author.value
  let c = page_no.value;  
  var newBook = new Book(a,b,c);
  myLibrary.push(newBook);

      
 
}



function showForm(){
  let button = document.querySelector('.form-popup');
  button.style.display = 'block';
}

function closeForm(){
  let button = document.querySelector('.form-popup');
  button.style.display = 'none';
}




