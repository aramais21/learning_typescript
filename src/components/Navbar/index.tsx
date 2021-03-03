import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

interface Props {
    isLoggedIn: boolean;
    changeStatus: (event: MouseEvent<HTMLElement>)  => void
}

const Navbar = (props: Props) => {
    return (
        <div className = 'navOutter' >
            <div className = 'navInner' >
            {props.isLoggedIn?
                <>
                    <Link to = '/' className = 'link' > home </Link>
                    <Link to = '/create' className = 'link' > create </Link>
                    <Link to = '/show' className = 'link' > show </Link>
                    <div className = 'link' onClick = {props.changeStatus} > sign out </div>
                </>
            :
                <>
                    Sign in first to use this app
                </>
            }
            </div>
        </div>
    );
}

export default Navbar;