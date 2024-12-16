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
