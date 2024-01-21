import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Signup from "./Signup-Login"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <Signup />
        </div>
    )
}

export default Header