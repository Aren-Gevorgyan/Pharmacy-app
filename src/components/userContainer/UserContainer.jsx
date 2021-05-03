import {connect} from 'react-redux';
import User from './user/User';

const mapStateToProps = (state) =>{
    return {
        name: state.header.name,
        card: state.header.card,
        address: state.header.address,
        phone: state.header.phone,
        drugName: state.header.drugName,
        buyMedicine: state.header.buyMedicine,
        doctorVAT: state.header.doctorVAT,
        doctorPhone: state.header.doctorPhone,
        guardianVAT: state.header.guardianVAT,
        guardianPhones: state.header.guardianPhones,
    }
}

const UserContainer = connect(mapStateToProps, {})(User);

export default UserContainer;

