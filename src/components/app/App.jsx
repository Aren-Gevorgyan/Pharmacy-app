import style from './App.module.css';
import HeaderContainer from '../headerContainer/HeaderContainer';
import Registration from '../registration/Registration';
import {Route} from 'react-router-dom';
import UserContainer from '../userContainer/UserContainer';
import { withRouter} from 'react-router'

const App = (props) => {

  return (

    <div className={style.container}>
      <HeaderContainer/>

      <div className={style.pages}> 

        {/*exact only / in case*/} 
        <Route exact path="/">
          <Registration/>
        </Route>

        {/*exact only / in case*/} 
        <Route exact path='/user'>
          <UserContainer/>
        </Route>

      </div>
      
    </div>
  )

}

export default withRouter(App);
