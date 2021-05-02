import { getUserData } from '../../dal/connectApi';

const USER_DATA = "USER DATA";

const initialState = {
    name: null,
    card: null,
    address: null,
    phone: null,
    drugName: null,
    buyMedicine: null,
    doctorVAT: null,
    doctorPhone: null,
    guardianVAT: null,
    guardianPhones: null,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {...state, ...action.data }
        default:
            return state;
    }
}

const setUserData = (data) => ({ type: USER_DATA, data });

export const getUserDataThunk = (data) => {
    return async(dispatch) => {
        const userData = await getUserData(data);
        userData.forEach((e) => {
            const userData = {
                name: e.data().name,
                card: e.data().card,
                address: e.data().address,
                phone: e.data().phone,
                drugName: e.data().drugName,
                buyMedicine: e.data().buyMedicine,
                doctorVAT: e.data().doctorVAT,
                doctorPhone: e.data().doctorPhone,
                guardianVAT: e.data().guardianVAT,
                guardianPhones: e.data().guardianPhones,
            }
            dispatch(setUserData(userData));
        })
    }
}

export default headerReducer;