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
        let currentBookComments = books[indexBook].comments;
        let commentsUsersRef = document.getElementById("commentsUsers");
        commentsUsersRef.innerHTML = "";
        commentsUsersRef.setAttribute('id', indexBook)

        for (let indexComment = 0; indexComment < currentBookComments.length; indexComment++) {
            let bookComment = currentBookComments[indexComment].text;
            let userComment = currentBookComments[indexComment].username;
            commentsUsersRef.innerHTML += getCommentsTemplate(bookComment, userComment);
        }
    }
}

function getBookTemplate(indexBook) {
    return `
            <div class="book-card">
                <div class="img-container">
                    <img src="${books[indexBook].img}" alt="book image">
                </div>
                <div class="book-content">
                    <div class="title-likes">
                        <h2 id="title">${books[indexBook].title}</h2>
                        <div class="likes">
                            <p>${books[indexBook].likes}</p>
                            <p>❤️</p>
                        </div>
                    </div>
                    <p id="author">Author: <span>${books[indexBook].author}</span></p>
                    <p id="genre">Genre: <span>${books[indexBook].genre}</span></p>
                    <div class="details">
                        <div class="price-box">
                            <h3>Price: </h3>
                            <h3 id="price">${books[indexBook].price}€</h3>
                        </div>
                    </div>
                    <div class="comments">
                        <h3>Comments</h3>
                        <div class="comments-users" id="commentsUsers">
                        </div>
                        <div id="addComment">
                            <input type="text" id="newComment" placeholder="enter new comment" >
                            <button id="AddCommentBtn" onclick="addComment(${indexBook})">add comment</button>
                        </div>
                    </div>
                </div>
            </div>
            `
}

// function renderComments(indexBook){
//     let currentBookComments = indexBook.comments;
//     let commentsUsersRef = document.getElementById("commentsUsers");
//     commentsUsersRef.innerHTML = "";

//     for (let indexComment = 0; indexComment < currentBookComments.length; indexComment++) {
//         let bookComment = currentBookComments[indexComment].text;
//         let userComment = currentBookComments[indexComment].username;
//         commentsUsersRef.innerHTML += getCommentsTemplate(bookComment, userComment);
//     }
// }

function addComment(indexBook) {
    let newCommentRef = document.getElementById("newComment");
    let newComment = newCommentRef.value;
    let currentBook = books[indexBook];
    currentBook.comments.push(`{"username": "Cata", "text": "${newComment}"}`);
    renderBookcards();
}

function getCommentsTemplate(bookComment, userComment) {
    return `<div class="comments-container">
                <div class="user-div">${userComment}</div>
                <div class="comment-div">${bookComment}</div>
            </div>
    `
}
