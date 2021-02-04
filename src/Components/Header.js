import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1> {title} </h1>
            { location.pathname === '/' && (
                <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'React Learning',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js
// const headerStyle = {
//     color : '#8a0000',
//     backgroundColor :'black'
// }

export default Header
