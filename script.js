function init() {
    // getFromLocalStorage();
    renderBookcards();
    // renderFavoriteBooks();
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


// function getErrorMessageTemplate(){
//     return `
//             <div class="error-message">
//                 <p>please enter a comment</p>
//             </div>`
// };



// TODO'S 

// implement Likes counter 
// make heart icon clickable and add or substract like

// push liked books into an empty array
// make renderFavoriteBooks() 
// make button favorites clickable and call the favorites function

// clean code
// transfer templates into different file
// fix if else condition add empty comments


// respo
// make navbar responsive 
