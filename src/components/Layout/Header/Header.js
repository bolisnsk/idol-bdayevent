import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <div>
                    로고
                </div>

                <nav className='navigation'>
                    <ul>
                        <li>
                            검색
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header