import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Signup from "./Signup-Login"
import Navigation from "./Navigation"

const Header = () => {
    return (
        <div className="main-head">
            <div className="header">
                <Logo />
                <SearchBar />
                <Signup />
            </div>
            <Navigation />
        </div>
    )
}

export default Header