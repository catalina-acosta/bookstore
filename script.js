function init() {
    getFromLocalStorage();
    renderBookcards();
}

function renderBookcards() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        if(books[indexBook].favorite == true){
            contentRef.innerHTML += getBookTemplateTrue(indexBook);
            renderComments(indexBook);
        } else {
            contentRef.innerHTML += getBookTemplateFalse(indexBook);
            renderComments(indexBook);
        }
    }
}

function renderComments(indexBook){
    let currentBookComments = books[indexBook].comments;
    let commentsUsersRef = document.getElementById("commentsUsers");
    commentsUsersRef.innerHTML = "";
    commentsUsersRef.setAttribute('id', indexBook);

    for (let indexComment = 0; indexComment < currentBookComments.length; indexComment++) {
        let bookComment = currentBookComments[indexComment].text;
        let userComment = currentBookComments[indexComment].username;
        commentsUsersRef.innerHTML += getCommentsTemplate(bookComment, userComment);
    }
}

function addComment(indexBook) {
    let newCommentRef = document.getElementById(`newComment${indexBook}`);
    let newComment = newCommentRef.value;
    let errorMessageRef = document.getElementById(`errorMessage${indexBook}`);
    let errorMessageDiv = errorMessageRef;

    if (newComment == ""){
        errorMessageDiv.innerHTML = getErrorMessageTemplate();
    } else {
        let currentBook = books[indexBook];
        currentBook.comments.push({"username": "Cata", "text": newComment});
        saveToLocalStorage();
        renderBookcards();
    }
}

function addLike(indexBook) { 
    if (books[indexBook].favorite == false) {
        books[indexBook].likes += 1;
        books[indexBook].favorite = true;
        addBookToFavorites(indexBook);
        saveToLocalStorage();
        renderBookcards();
    } else {
        let bookName = books[indexBook].title;
        books[indexBook].likes -= 1; 
        books[indexBook].favorite = false;
        removeFromFavorites(bookName); 
        saveToLocalStorage();
        renderBookcards();
    }
}

function addBookToFavorites(indexBook) {
    favoriteBooks.push(books[indexBook]);
}

function removeFromFavorites(bookName) {
    for (let index = 0; index < favoriteBooks.length; index++) {
        if (favoriteBooks[index].title == bookName){
            favoriteBooks.splice(index, 1);
        }
    }
}

function removeFromFavoritesPage(indexBook){
    let removedBookArray = favoriteBooks.splice(indexBook, 1);
    let removedBook = removedBookArray[0];

    for (let index = 0; index < books.length; index++) {
        if (books[index].title == removedBook.title) {
            books[index].favorite = false;
            books[indexBook].likes -= 1;
        }
    }
    saveToLocalStorage();
    renderFavoriteBookcards();
    renderBookcards();
}

function renderFavoriteBookcards() {
    getFromLocalStorage();
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < favoriteBooks.length; indexBook++) {
            contentRef.innerHTML += getFavoriteBookTemplate(indexBook);
            renderFavoriteComments(indexBook);
    }
}

function renderFavoriteComments(indexBook) {
    let currentBookComments = favoriteBooks[indexBook].comments;
    let commentsUsersRef = document.getElementById("commentsUsers");
    commentsUsersRef.innerHTML = "";
    commentsUsersRef.setAttribute('id', indexBook);

    for (let indexComment = 0; indexComment < currentBookComments.length; indexComment++) {
        let bookComment = currentBookComments[indexComment].text;
        let userComment = currentBookComments[indexComment].username;
        commentsUsersRef.innerHTML += getCommentsTemplate(bookComment, userComment);
    }
}

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
}

function getFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem("books"));

    if (savedBooks !== null) {
        books = savedBooks;
    }

    let savedFavoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
    
    if (savedFavoriteBooks === null) {
        favoriteBooks = [];
    } else {
        favoriteBooks = savedFavoriteBooks;
    }
}



