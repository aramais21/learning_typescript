import {MouseEvent} from 'react';

import './style.css';

interface Props {
    changeStatus: (event: MouseEvent<HTMLElement>) => void;
}

const SignIn = (props: Props) => {
    return (
        <div className = 'wrapper' >
            <div>Sign In</div>
            <div><input type = 'text' className = '' placeholder = 'username' /></div>
            <div><input type = 'password' className = '' placeholder = 'password' /></div>
            <button> Submit </button>
        </div>
    );
}

export default SignIn;