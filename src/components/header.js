import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/' style={{ padding: '5px' }}>
                Home
          </Link>
            <Link to='/users' style={{ padding: '5px' }}>
                Users
          </Link>
        </div>
    )
};

export default Header;
