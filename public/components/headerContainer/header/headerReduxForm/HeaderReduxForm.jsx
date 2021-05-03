import React, {useState} from 'react';
import {Field} from 'redux-form';
import style from './HeaderReduxForm.module.css';

const Form = ({handleSubmit}) => {

    const [styleSearchIcon, setStyleSearchIcon] = useState({});

    const focus = () => {
          setStyleSearchIcon({
              fontSize: "20px",
          })
    }

    const mouseover = () => {
        setStyleSearchIcon({
            fontSize: "12px",
        })
    }

    return (
        <form onSubmit={handleSubmit} className={style.searchContainer}>
            <label>
              <Field onFocus={focus} className={style.search} 
                     name="search" component="input" placeholder="անուն ազգանուն հայրանուն"/>
            </label>
            <i style={styleSearchIcon} className={`${style.searchIcon} fa fa-search`}/>
            <button type="submit" onMouseOver={mouseover} 
                    className={style.searchButton} title="սեղմել"></button>
            
        </form>
    )
}

export default Form;
