let books = [
    {
    title: "Dune",
    author: "Frank Herbert",
    likes: 12500,
    price: 19.99,
    comments: [
        "A masterclass in world-building!",
        "It changed how I think about science fiction.",
        "The political intrigue kept me hooked.",
        ],
        img: "assets/img/book_1.jpg",
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        likes: 18000,
        price: 14.99,
        comments: [
        "An enchanting tale that brings Middle-earth to life.",
        "Bilbo's journey is so relatable and inspiring!",
        "Perfect for both children and adults.",
        ],
        img: "assets/img/book_2.jpg",
    },
    {
        title: "1984",
        author: "George Orwell",
        likes: 15000,
        price: 12.99,
        comments: [
        "Chilling and thought-provoking.",
        "A dystopian masterpiece that stays relevant.",
        "Orwell's vision is both terrifying and captivating.",
        ],
        img: "assets/img/book_3.jpg",
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        likes: 10000,
        price: 17.99,
        comments: [
        "Kvothe's story is beautifully written.",
        "The prose is poetic yet accessible.",
        "Can't wait for the next installment!",
        ],
        img: "assets/img/book_4.jpg",
    },
    {
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        likes: 9500,
        price: 16.99,
        comments: [
        "The magic system is so unique and engaging!",
        "Sanderson's twists are legendary.",
        "Perfect balance of action and character depth.",
        ],
        img: "assets/img/book_5.jpg",
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        likes: 8700,
        price: 13.99,
        comments: [
        "A brilliant exploration of strategy and morality.",
        "Ender is such a complex character.",
        "I couldn't put it down until the end.",
        ],
        img: "assets/img/book_6.jpg",
    },
    {
        title: "The Wheel of Time: The Eye of the World",
        author: "Robert Jordan",
        likes: 8200,
        price: 15.99,
        comments: [
        "An epic start to an incredible series.",
        "Jordan's world-building is unmatched.",
        "Fans of Tolkien will love this.",
        ],
        img: "assets/img/book_7.jpg",
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        likes: 7200,
        price: 12.49,
        comments: [
        "A cyberpunk classic that defines the genre.",
        "The gritty atmosphere is unforgettable.",
        "Gibson's vision of the future feels prophetic.",
        ],
        img: "assets/img/book_1.jpg",
    },
    {
        title: "A Song of Ice and Fire: A Game of Thrones",
        author: "George R.R. Martin",
        likes: 16000,
        price: 18.99,
        comments: [
        "So many twists and turns—I loved it!",
        "Martin's characters feel so real and flawed.",
        "A gritty, realistic take on fantasy.",
        ],
        img: "assets/img/book_2.jpg",
    },
    {
        title: "Good Omens",
        author: "Neil Gaiman and Terry Pratchett",
        likes: 7700,
        price: 14.99,
        comments: [
        "Hilarious and heartwarming at the same time.",
        "Crowley and Aziraphale are iconic!",
        "A comedic gem with plenty of depth.",
        ],
        img: "assets/img/book_3.jpg",
    },
    {
        title: "Hyperion",
        author: "Dan Simmons",
        likes: 6800,
        price: 14.49,
        comments: [
        "The Shrike is both terrifying and fascinating.",
        "A beautifully complex narrative structure.",
        "Simmons' writing is absolutely brilliant.",
        ],
        img: "assets/img/book_4.jpg",
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        likes: 14000,
        price: 10.99,
        comments: [
        "Katniss is such a strong and relatable heroine.",
        "The concept is both horrifying and gripping.",
        "A page-turner from start to finish.",
        ],
        img: "assets/img/book_5.jpg",
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        likes: 9000,
        price: 13.99,
        comments: [
        "A cornerstone of science fiction literature.",
        "Asimov's vision of the future is unparalleled.",
        "Hari Seldon's psychohistory is fascinating.",
        ],
        img: "assets/img/book_6.jpg",
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        likes: 11000,
        price: 12.99,
        comments: [
        "Hilarious and scientifically accurate!",
        "Mark Watney is the ultimate survivor.",
        "A must-read for sci-fi fans.",
        ],
        img: "assets/img/book_7.jpg",
    },
    {
        title: "Children of Time",
        author: "Adrian Tchaikovsky",
        likes: 7200,
        price: 14.99,
        comments: [
        "Spider civilizations—what an idea!",
        "Tchaikovsky's imagination is breathtaking.",
        "A fascinating exploration of evolution and survival.",
        ],
        img: "assets/img/book_1.jpg",
    },
    {
        title: "The Dark Tower: The Gunslinger",
        author: "Stephen King",
        likes: 6700,
        price: 11.99,
        comments: [
        "Roland is a captivating protagonist.",
        "King's blend of genres is genius.",
        "A dark and thrilling journey.",
        ],
        img: "assets/img/book_2.jpg",
    },
    {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        likes: 6100,
        price: 13.49,
        comments: [
        "A groundbreaking exploration of gender and society.",
        "Le Guin's prose is simply beautiful.",
        "The world-building is incredibly immersive.",
        ],
        img: "assets/img/book_3.jpg",
    },
    {
        title: "Ready Player One",
        author: "Ernest Cline",
        likes: 8600,
        price: 14.99,
        comments: [
        "A nostalgic trip for gamers and geeks alike.",
        "The Oasis is a virtual world I wish was real.",
        "Fun, fast-paced, and full of pop culture references.",
        ],
        img: "assets/img/book_4.jpg",
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        likes: 8800,
        price: 11.49,
        comments: [
        "A haunting warning about censorship.",
        "Bradbury's imagery is unforgettable.",
        "Still relevant in today's world.",
        ],
        img: "assets/img/book_5.jpg",
    },
    {
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        likes: 7300,
        price: 19.99,
        comments: [
        "Dragons and queens—what more could you want?",
        "Shannon's world-building is lush and detailed.",
        "A must-read for epic fantasy lovers.",
        ],
        img: "assets/img/book_6.jpg",
    },
    ];

