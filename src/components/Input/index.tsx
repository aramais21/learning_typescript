import {useState, ChangeEvent, forwardRef} from 'react';

import './style.css'

interface Props {
    type: string;
    placeholder?: string;
    errorMessage?: string;
    regExp?: RegExp;
    changeHandler?: (hasError: boolean, value: string) => void;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const [hasError, setHasError] = useState(false);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(props.regExp) {
            const matches = props.regExp.test(e.target.value);
            if(props.changeHandler) {
                props.changeHandler(!matches, e.target.value);
            }
            setHasError(!matches);
            return ;
        }
        if(props.changeHandler) {
            props.changeHandler(false, e.target.value)
        }
        setHasError(false);
        return ;
    }

    return (
        <div className = 'inputCont' >
            {
                props.errorMessage && props.regExp?
                    hasError?
                    <div className = 'errorMessage'> {props.errorMessage} </div>
                    :
                    null
                :
                null 
            }
            <input className = {`inputField ${hasError?'errorInput':''}`} type={props.type} ref={ref?ref:null} placeholder={props.placeholder} onChange={onChange} />
        </div>
    )
})

export default Input;