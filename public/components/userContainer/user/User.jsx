import React from 'react';
import style from './User.module.css';

const DataUser = ({descriptionTitle, description}) => {
    
    return(
          <div>
             <h5>{descriptionTitle}</h5>
             <span>{description}</span>
          </div>
    )
}

const User = (props) => {
    
    const descriptionTitle = [{title:"Անուն ազգանուն հայրանուն", desc: props.name},
                              {title:"Քարտի համար", desc: props.card},
                              {title:"Հասցե", desc: props.address},
                              {title:"Հեռախոսահամար", desc: props.phone},
                              {title:"Դեղի անուն", desc: props.drugName},
                              {title:"Ինչքան ժամանակը մեկ պետք է այդ դեղից գնել", desc: props.buyMedicine},
                              {title:"Բժշկի ԱԱՀ", desc: props.doctorVAT},
                              {title:"Բժշկր հեռախոսահամար", desc: props.doctorPhone},
                              {title:"Խնամակալի ԱԱՀ", desc: props.guardianVAT},
                              {title:"Խնամակալի 2 հեռախոսահամար", desc: props.guardianPhones}];
  
    const data = descriptionTitle.map((description)=>{
        return <DataUser key={description.title} descriptionTitle={description.title} description={description.desc}/>
    })

    return(
        <div className={style.container}>
            <div className={style.data}>
               <h2>Հաճախորդի մասին</h2>
               {data}
            </div>
        </div>
    )
}

export default User;