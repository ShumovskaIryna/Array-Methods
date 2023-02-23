import '../App.css';
import { Link } from 'react-router-dom';

function Header({array}) {
    return (
    <div className="App">
        <h1>const array = [{array.map(({ name}, index) => {
            if (index === array.length - 1) {
                return `\n${name}`;
            }
            return `\n${name},`
        })}]</h1>
        <Link to="/map" 
            style={{ 
                textDecoration: "none", 
                color: "white", 
                margin: "13px", 
                border: "solid 2px lightblue", 
                padding: "5px" }}>
            <span className="">.map</span>
        </Link>
        <Link to="/filter" 
            style={{ 
                textDecoration: "none", 
                color: "white", 
                margin: "13px", 
                border: "solid 2px lightblue", 
                padding: "5px" }}>
            <span className="">.filter</span>
        </Link>
    </div>
    )
}

export default Header;