import React from 'react';
import {Field} from 'redux-form';

const MyField = ({description, name, placeholder, type}) => {
    return (
        <label>{description}
          <Field name={name} type={type} placeholder={placeholder} component="input" required/>
        </label>
    )
}

export default MyField;