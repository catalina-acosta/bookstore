let books = [
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "likes": 12500,
        "price": 19.99,
        "comments": [
            { "username": "SciFiLover", "text": "A masterclass in world-building!" },
            { "username": "DuneFan88", "text": "It changed how I think about science fiction." },
            { "username": "EpicReader", "text": "The political intrigue kept me hooked." }
        ],
        "img": "assets/img/book_1.jpg"
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "likes": 18000,
        "price": 14.99,
        "comments": [
            { "username": "MiddleEarthFan", "text": "An enchanting tale that brings Middle-earth to life." },
            { "username": "AdventureSeeker", "text": "Bilbo's journey is so relatable and inspiring!" },
            { "username": "FantasyLover", "text": "Perfect for both children and adults." }
        ],
        "img": "assets/img/book_2.jpg"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "likes": 15000,
        "price": 12.99,
        "comments": [
            { "username": "ThoughtfulReader", "text": "Chilling and thought-provoking." },
            { "username": "DystopiaFan", "text": "A dystopian masterpiece that stays relevant." },
            { "username": "OrwellianDream", "text": "Orwell's vision is both terrifying and captivating." }
        ],
        "img": "assets/img/book_3.jpg"
    },
    {
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "likes": 10000,
        "price": 17.99,
        "comments": [
            { "username": "KvotheLover", "text": "Kvothe's story is beautifully written." },
            { "username": "ProseFan", "text": "The prose is poetic yet accessible." },
            { "username": "EagerReader", "text": "Can't wait for the next installment!" }
        ],
        "img": "assets/img/book_4.jpg"
    },
    {
        "title": "Mistborn: The Final Empire",
        "author": "Brandon Sanderson",
        "likes": 9500,
        "price": 16.99,
        "comments": [
            { "username": "MagicFan", "text": "The magic system is so unique and engaging!" },
            { "username": "PlotTwistLover", "text": "Sanderson's twists are legendary." },
            { "username": "EpicAdventure", "text": "Perfect balance of action and character depth." }
        ],
        "img": "assets/img/book_5.jpg"
    },
    {
        "title": "Ender's Game",
        "author": "Orson Scott Card",
        "likes": 8700,
        "price": 13.99,
        "comments": [
            { "username": "Strategist", "text": "A brilliant exploration of strategy and morality." },
            { "username": "ComplexCharFan", "text": "Ender is such a complex character." },
            { "username": "PageTurner", "text": "I couldn't put it down until the end." }
        ],
        "img": "assets/img/book_6.jpg"
    },
    {
        "title": "The Wheel of Time: The Eye of the World",
        "author": "Robert Jordan",
        "likes": 8200,
        "price": 15.99,
        "comments": [
            { "username": "EpicFan", "text": "An epic start to an incredible series." },
            { "username": "WorldBuilder", "text": "Jordan's world-building is unmatched." },
            { "username": "TolkienFan", "text": "Fans of Tolkien will love this." }
        ],
        "img": "assets/img/book_7.jpg"
    },
    {
        "title": "Neuromancer",
        "author": "William Gibson",
        "likes": 7200,
        "price": 12.49,
        "comments": [
            { "username": "CyberpunkLover", "text": "A cyberpunk classic that defines the genre." },
            { "username": "AtmosphereFan", "text": "The gritty atmosphere is unforgettable." },
            { "username": "FutureVisionary", "text": "Gibson's vision of the future feels prophetic." }
        ],
        "img": "assets/img/book_1.jpg"
    },
    {
        "title": "A Song of Ice and Fire: A Game of Thrones",
        "author": "George R.R. Martin",
        "likes": 16000,
        "price": 18.99,
        "comments": [
            { "username": "TwistLover", "text": "So many twists and turns—I loved it!" },
            { "username": "CharacterFan", "text": "Martin's characters feel so real and flawed." },
            { "username": "RealisticFantasy", "text": "A gritty, realistic take on fantasy." }
        ],
        "img": "assets/img/book_2.jpg"
    },
    {
        "title": "Good Omens",
        "author": "Neil Gaiman and Terry Pratchett",
        "likes": 7700,
        "price": 14.99,
        "comments": [
            { "username": "ComedyFan", "text": "Hilarious and heartwarming at the same time." },
            { "username": "IconicDuo", "text": "Crowley and Aziraphale are iconic!" },
            { "username": "DepthFan", "text": "A comedic gem with plenty of depth." }
        ],
        "img": "assets/img/book_3.jpg"
    },
    {
        "title": "Hyperion",
        "author": "Dan Simmons",
        "likes": 6800,
        "price": 14.49,
        "comments": [
            { "username": "TerrifiedReader", "text": "The Shrike is both terrifying and fascinating." },
            { "username": "StructureFan", "text": "A beautifully complex narrative structure." },
            { "username": "BrilliantWriter", "text": "Simmons' writing is absolutely brilliant." }
        ],
        "img": "assets/img/book_4.jpg"
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "likes": 14000,
        "price": 10.99,
        "comments": [
            { "username": "HeroineFan", "text": "Katniss is such a strong and relatable heroine." },
            { "username": "GrippingConcept", "text": "The concept is both horrifying and gripping." },
            { "username": "FastReader", "text": "A page-turner from start to finish." }
        ],
        "img": "assets/img/book_5.jpg"
    },
    {
        "title": "Foundation",
        "author": "Isaac Asimov",
        "likes": 9000,
        "price": 13.99,
        "comments": [
            { "username": "SciFiClassic", "text": "A cornerstone of science fiction literature." },
            { "username": "VisionaryFan", "text": "Asimov's vision of the future is unparalleled." },
            { "username": "PsychohistoryLover", "text": "Hari Seldon's psychohistory is fascinating." }
        ],
        "img": "assets/img/book_6.jpg"
    },
    {
        "title": "The Martian",
        "author": "Andy Weir",
        "likes": 11000,
        "price": 12.99,
        "comments": [
            { "username": "ScienceLover", "text": "Hilarious and scientifically accurate!" },
            { "username": "SurvivorFan", "text": "Mark Watney is the ultimate survivor." },
            { "username": "SciFiFanatic", "text": "A must-read for sci-fi fans." }
        ],
        "img": "assets/img/book_7.jpg"
    },
    {
        "title": "Children of Time",
        "author": "Adrian Tchaikovsky",
        "likes": 7200,
        "price": 14.99,
        "comments": [
            { "username": "SpiderFan", "text": "Spider civilizations—what an idea!" },
            { "username": "ImaginativeReader", "text": "Tchaikovsky's imagination is breathtaking." },
            { "username": "EvolutionFan", "text": "A fascinating exploration of evolution and survival." }
        ],
        "img": "assets/img/book_1.jpg"
    },
    {
        "title": "The Dark Tower: The Gunslinger",
        "author": "Stephen King",
        "likes": 6700,
        "price": 11.99,
        "comments": [
            { "username": "DarkFantasyLover", "text": "King blends horror and fantasy perfectly." },
            { "username": "RolandFan", "text": "Roland's journey is haunting and captivating." },
            { "username": "EpicQuest", "text": "A dark and unforgettable quest story." }
        ],
        "img": "assets/img/book_2.jpg"
    }
]
