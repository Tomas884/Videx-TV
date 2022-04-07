import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Home';
import LoginAndRegister from './LoginAndRegister';
import About from './About';
import Register from './Register';
import Update from './Update';
import Delete from './Delete';
import PasswordRecovery from './PasswordRecovery';
import AccountSettings from './AccountSettings';
import AccountData from './AccountData';
import MyUploads from './MyUploads';

const ReactRouterSetup = () => {
	return (
	  <Router>
	     <Switch>
		 
		   <Route exact path='/'>
		   <Home/>
		   </Route>
		   
		   <Route path='/LoginAndRegister'>
		   <LoginAndRegister/>
		   </Route>
		   
		   <Route path='/About'>
		   <About/>
		   </Route>
		   
		   <Route path='/Register'>
		   <Register/>
		   </Route>
		   
		   <Route path='/Update'>
		   <Update/>
		   </Route>
		   
		   <Route path='/Delete'>
		   <Delete/>
		   </Route>
		   
		   <Route path='/PasswordRecovery'>
		   <PasswordRecovery/>
		   </Route>
		   
		   <Route path='/AccountSettings'>
		   <AccountSettings/>
		   </Route>
		   
		   <Route path='/AccountData'>
		   <AccountData/>
		   </Route>
		   
		   <Route path='/MyUploads'>
		   <MyUploads/>
		   </Route>
		   
		 </Switch>
	  </Router>
	);
};

export default ReactRouterSetup;