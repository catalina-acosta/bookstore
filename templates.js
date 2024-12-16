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
                            <p id="likesCounter${indexBook}">${books[indexBook].likes}</p>
                            <button class="heartButton" id="heart${indexBook}" onclick="addLike(${indexBook})"><i class="fa-solid fa-heart"></i></button>
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
                            <input type="text" id="newComment${indexBook}" placeholder="enter new comment" >
                            <button id="AddCommentBtn" onclick="addComment(${indexBook})">add comment</button>
                        </div>
                        <div id="errorMessage${indexBook}"></div>
                    </div>
                </div>
            </div>
            `
}

function getCommentsTemplate(bookComment, userComment) {
    return `<div class="comments-container">
                <div class="user-div">${userComment}</div>
                <div class="comment-div">${bookComment}</div>
            </div>
    `
}

function getLikesTemplate(indexBook) {
    return `
                    <p id="likesCounter">${books[indexBook].likes}</p>
                    `
}

function getFavoriteBookTemplate(indexBook) {

return `
        <div class="book-card">
            <div class="img-container">
                <img src="${favoriteBooks[indexBook].img}" alt="book image">
            </div>
            <div class="book-content">
                <div class="title-likes">
                    <h2 id="title">${favoriteBooks[indexBook].title}</h2>
                    <div class="likes">
                        <p id="likesCounter${indexBook}">${favoriteBooks[indexBook].likes}</p>
                        <button class="heartButton liked" id="heart${indexBook}" onclick="addLike(${indexBook})"><i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
                <p id="author">Author: <span>${favoriteBooks[indexBook].author}</span></p>
                <p id="genre">Genre: <span>${favoriteBooks[indexBook].genre}</span></p>
                <div class="details">
                    <div class="price-box">
                        <h3>Price: </h3>
                        <h3 id="price">${favoriteBooks[indexBook].price}€</h3>
                    </div>
                </div>
                <div class="comments">
                    <h3>Comments</h3>
                    <div class="comments-users" id="commentsUsers">
                    </div>
                    <div id="addComment">
                        <input type="text" id="newComment${indexBook}" placeholder="enter new comment" >
                        <button id="AddCommentBtn" onclick="addComment(${indexBook})">add comment</button>
                    </div>
                </div>
            </div>
        </div>
        `
}

function getErrorMessageTemplate(){
    return `
            <div class="error-message">
                <p>please enter a comment</p>
            </div>`
};