function init() {
    // getFromLocalStorage();
    renderBookcards();
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
    if (newComment == ""){
        console.log("to be fixed");
        // newCommentRef.innerHTML += renderErrorMessage();
    } else {
        let currentBook = books[indexBook];
        currentBook.comments.push({"username": "Cata", "text": newComment});
        renderBookcards();
    }
}


function addLike(indexBook) {
    let heartRef = document.getElementById(`heart${indexBook}`);
    heartRef.classList.toggle("liked");
    let likesRef = document.getElementById(`likesCounter${indexBook}`);

    if (heartRef.classList[1] == "liked") {
        books[indexBook].likes += 1; 
        likesRef.innerHTML = getLikesTemplate(indexBook);
        addBookToFavorites(indexBook);
    } else {
        books[indexBook].likes -= 1;
        likesRef.innerHTML = getLikesTemplate(indexBook);
        removeFromFavorites(indexBook);
    }

}

function addBookToFavorites(indexBook) {
    favoriteBooks.push(books[indexBook]);
}

function removeFromFavorites(indexBook) {
    favoriteBooks.splice(indexBook, 1);
    renderFavoriteBookcards();
}

function renderFavoriteBookcards() {
    // getFromLocalStorage
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

// function getErrorMessageTemplate(){
//     return `
//             <div class="error-message">
//                 <p>please enter a comment</p>
//             </div>`
// };



// TODO'S 

// implement local storage


// clean code
// transfer templates into different file
// fix if else condition add empty comments

// fix errror Template function


