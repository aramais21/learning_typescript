import {MouseEvent, useRef, useState} from 'react';

import Input from '../../components/Input';

import './style.css';

interface Props {
    changeStatus: (event: MouseEvent<HTMLElement>) => void;
}

const SignUp = (props: Props) => {
    const [formData, setFormData] = useState([
        {
            field: 'email',
            value: '',
            hasError: false
        },
        {
            field: 'username',
            value: '',
            hasError: false
        },
        {
            field: 'password',
            value: '',
            hasError: false
        }
    ]);
    const [canLog, setCanLog] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);

    const changeHandler = (hasError: boolean, value: string, field: string) => {
        const newFormData = [...formData];
        let isFilled = false;
        const obj = formData.find((item) => item.field === field);
        if(obj) {
            const objIndex = formData.indexOf(obj);
            const newObj = {...obj, hasError, value}
            newFormData[objIndex] = newObj;
        }
        setFormData(newFormData);
        for(let i = 0; i < newFormData.length; i++) {
            const item = newFormData[i];
            if(item.hasError || item.value.length === 0) {
                isFilled = false;
                break;
            }
            isFilled = true;
        }
        setCanLog(isFilled);
    }

    const changeHandlerEmail = (hasError: boolean, value: string) => {changeHandler(hasError,value,'email');}
    const changeHandlerUsername = (hasError: boolean, value: string) => {changeHandler(hasError,value,'username');}
    const changeHandlerPassword = (hasError: boolean, value: string) => {changeHandler(hasError,value,'password');}

    const submitHandler = (e:MouseEvent<HTMLElement>) => {
        e.preventDefault();
        props.changeStatus(e);
    }

    return (
        <div className = 'wrapper' >
            <div className = 'signText' >Sign Up</div>
            <Input 
                ref={emailRef} 
                type = 'email' 
                placeholder = 'email' 
                regExp = {/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} 
                errorMessage = {'It is not an email'}
                changeHandler = {changeHandlerEmail}
            />
            <Input 
                type = 'text'
                placeholder = 'username' 
                changeHandler = {changeHandlerUsername}
            />
            <Input 
                type = 'password'  
                placeholder = 'password' 
                regExp = {/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm} 
                errorMessage = ' Min kength 8. Should Have 1 uppercase 1 lowercase letter and 1 num' 
                changeHandler = {changeHandlerPassword}
            />
            <button onClick = {submitHandler} className = 'button'  disabled = {!canLog} > Submit </button>
        </div>
    );
}

export default SignUp;