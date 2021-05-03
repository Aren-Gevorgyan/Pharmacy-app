import FieldItems from '../../../utils/fieldItems/FieldItems';
import style from './RegistrationForm.module.css';

const RegisterForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={style.data}>
           <h2>Գրանցել հաճախորդին</h2>

           <FieldItems name="name" type="text" 
           placeholder="անուն ազգանուն հայրանուն"description="Անուն ազգանուն հայրանուն"/>
           <FieldItems name="card" type="number" 
           placeholder="քարտի համար" description="Քարտի համար"/>
           <FieldItems name="address" type="text" 
           placeholder="հասցե" description="Հասցե"/>
           <FieldItems name="phone" type="number" 
           placeholder="հեռախոսահամար" description="Հեռախոսահամար"/>
           <FieldItems name="drugName" type="text" 
           placeholder="դեղի անուն" description="Դեղի անուն"/>
           <FieldItems name="buyMedicine" type="text" 
           placeholder="ինչքան ժամանակը մեկ պետք է այդ դեղից գնել" 
           description="Ինչքան ժամանակը մեկ պետք է այդ դեղից գնել"/>
           <FieldItems name="doctorVAT" type="text" 
           placeholder="բժշկի ԱԱՀ" description="Բժշկի ԱԱՀ"/>
           <FieldItems name="doctorPhone" type="number" 
           placeholder="բժշկր հեռախոսահամար" description="Բժշկր հեռախոսահամար"/>
           <FieldItems name="guardianVAT" type="text" 
           placeholder="խնամակալի ԱԱՀ" description="Խնամակալի ԱԱՀ"/>
           <FieldItems name="guardianPhones" type="text" 
           placeholder="խնամակալի 2 հեռախոսահամար" description="Խնամակալի 2 հեռախոսահամար"/>

           <button type="submit">Գրանցել</button>

        </form>
    )
}

export default RegisterForm;