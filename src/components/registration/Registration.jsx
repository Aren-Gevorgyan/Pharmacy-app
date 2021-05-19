import React from 'react';
import {reduxForm } from 'redux-form';
import style from './Registration.module.css';
import {setUserData} from '../../dal//connectApi';
import RegisterForm from './registrationForm/RegistrationForm';

const ReduxForm = reduxForm({form: "registration"})(RegisterForm);

function setData(value){
    //create data
    const user = {
        name: value.name,
        card: value.card,
        address: value.address,
        phone: value.phone,
        drugName: value.drugName,
        buyMedicine: value.buyMedicine,
        doctorVat: value.doctorVAT,
        doctorPhone: value.doctorPhone,
        guardianVAT: value.guardianVAT,
        guardianPhones: value.guardianPhones,
    }
    
    //add data firebase
    setUserData(user);
}

const Registration = () => {
    const register = (value) => {
        setData(value);
    }

    return (
        <div className={style.container}>
            <ReduxForm onSubmit={register}/>
        </div>
    )
}


export default Registration;