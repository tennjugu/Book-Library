const navLinks = ['Home', 'All Books', 'Category', 'Writer', 'Publisher', 'About', 'Contact']
const Navigation = () => {
    return (
        <div className="navigation">
            {navLinks.map((eachLink) => (
            <a key={eachLink} href="">{eachLink}</a>
            ))}
        </div>
    )
}

export default Navigation