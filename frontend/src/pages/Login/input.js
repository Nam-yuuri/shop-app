import React from "react";

function Input({className, handleChange,autoFocus,type,placeholder,id}) {
    return ( 
        <div>
            <input 
                className={className}
                onChange={handleChange}
                required
                autoFocus={autoFocus}
                type={type}
                InputProps
                placeholder={placeholder}
                id={id}
                Input={className === 'password' && {
                }}
            />
        </div>
     );
}

export default Input;