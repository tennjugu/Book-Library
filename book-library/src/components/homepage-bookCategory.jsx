const bookSections = [
    {
        bookName: "Biography",
        bookImage: {
            source: "src/assets/biography.jpeg",
            alt: "Biography"
        }
    },
    {
        bookName: "Fantasy",
        bookImage: {
            source: "src/assets/fantasy.webp",
            alt: "Fantasy"
        }
    },
    {
        bookName: "History",
        bookImage: {
            source: "src/assets/History.jpeg",
            alt: "History"
        }
    },
    {
        bookName: "Horror",
        bookImage: {
            source: "src/assets/horror.jpeg",
            alt: "Horror"
        }
    },
    {
        bookName: "Sci-Fi",
        bookImage: {
            source: "src/assets/sci-fi.jpg",
            alt: "Sci-Fi"
        }
    },
    {
        bookName: "Romance",
        bookImage: {
            source: "src/assets/romance.jpeg",
            alt: "Romancer"
        }
    }
   
];

const HomeBooks = () => {
    return (
        <div className="homeBooks">
            {bookSections.map((section) => (
                <div key = {section.bookName} className="sections">
                <img src= {section.bookImage.source} alt= {section.bookImage.alt} />
                <p>{section.bookName}</p>
            </div>
            ))}
        </div>
    )
}

export default HomeBooks