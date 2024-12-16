function init() {
    renderBookcards();
    saveToLocalStorage();
    getFromLocalStorage();
}

function renderBookcards() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookTemplate(indexBook);
        renderComments(indexBook);
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
        errorMessageDiv.innerHTML = getErrorMessageTemplate(); // needs to be styled
    } else {
        let currentBook = books[indexBook];
        currentBook.comments.push({"username": "Cata", "text": newComment});
        saveToLocalStorage();
        renderBookcards();
    }
}

// separate functions addToFavorites & removeFromFavorites (the index is different!!!!)
function addLike(indexBook) {    
    let likesRef = document.getElementById(`likesCounter${indexBook}`);
    let numberLikes = likesRef;
    let heartRef = document.getElementById(`heart${indexBook}`);
    let heartIcon = heartRef;
    heartIcon.classList.toggle("liked");

    if (books[indexBook].favorite == true) {
        books[indexBook].likes -= 1;
        books[indexBook].favorite = false;
        numberLikes.innerHTML = getLikesTemplate(indexBook);
        removeFromFavorites(indexBook);
        renderFavoriteBookcards();
    } else {
        books[indexBook].favorite = true;
        books[indexBook].likes += 1; 
        likesRef.innerHTML = getLikesTemplate(indexBook);
        addBookToFavorites(indexBook);
        saveToLocalStorage();
    }
}

function addBookToFavorites(indexBook) {
    favoriteBooks.push(books[indexBook]);

}

function removeFromFavorites(indexBook) {
    favoriteBooks.splice(indexBook, 1);
    saveToLocalStorage();
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

// TODO'S 

// implement local storage

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
}

function getFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks === null) {
        books = [];
    }   else {
        books = savedBooks;
    }

    let savedFavoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
    if (savedFavoriteBooks === null) {
        favoriteBooks = [];
    } else {
        favoriteBooks = savedFavoriteBooks;
    }
}


// clean code



