import logo from '../assets/logo.jpg'
import '/home/aaron/ita23-challenge/src/index.css'

const Header = () => {
    const handleButtonClick = () => {
        alert('Button clicked in Header');
    };
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button className='text-button' textOnly={true} onClick={handleButtonClick}>Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header