import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div id="footer">
            <Link to='/' style={{backgroundColor: '#dfe6e9'}}>Home</Link>
            <Link to='/blue'style={{backgroundColor: '#275db3'}}>Blue</Link>
            <Link to='/green'style={{backgroundColor: '#27ae60'}}>Green</Link>
            <Link to='/red'style={{backgroundColor: '#EE4B2B'}}>Red</Link>
            <Link to='/yellow'style={{backgroundColor: '#f1c40f'}}>Yellow</Link>
        </div>
    )
}