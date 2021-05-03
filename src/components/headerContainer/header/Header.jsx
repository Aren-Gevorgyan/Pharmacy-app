import React from 'react';
import style from './Header.module.css';
import {reduxForm} from 'redux-form';
import Form from './headerReduxForm/HeaderReduxForm';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg';

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
               <img src={logo} alt="logo"/>
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