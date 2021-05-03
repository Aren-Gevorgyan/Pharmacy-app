import React from 'react';
import style from './Header.module.css';
import {reduxForm} from 'redux-form';
import Form from './headerReduxForm/HeaderReduxForm';
import { NavLink } from 'react-router-dom';

const ReduxForm = reduxForm({form: "search"})(Form);

//React.memo if the data has changed then draws
const Header = React.memo((props) => {

    const search = (value) => {
        if(value.search !== undefined){
            props.history.push('/user')
            props.getUserDataThunk(value.search);
        }
    }

    return (
        <header>
           <div className={style.logoContainer}>
               <img src="https://image.freepik.com/free-vector/medical-pharmacy-logo_7888-26.jpg" alt="logo"/>
           </div>
           <nav>
              <ul>
                  <li><NavLink to="/" >Գրանցել</NavLink></li>
              </ul>   
              <ReduxForm onSubmit={search}/>
           </nav>
        </header>
    )
})

export default Header;