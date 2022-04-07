import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const LoginAndRegister = () => {
	return (
	<section className='videXTVHome'>
	<Header/>
	<ContentArea/>
	</section>
	);
};

const Header = () => {
	return (
	<article className='header'>
	
	<div id='pageNameHeading'>
	<h1>Login</h1>
	</div>
	
	<div id='toLoginAndRegisterPageBtn'>
	<ul>
	  <li>
	  <Link to='./LoginAndRegister'>Login/Signup</Link>
	  </li>
	</ul>
	</div>
	
	<div id='toAboutPageBtn'>
	<ul>
	  <li>
	  <Link to='./About'>About</Link>
	  </li>
	</ul>
	</div>
	
	<div id='toHomePageBtn'>
	<ul>
	  <li>
	  <Link to='./'>Home</Link>
	  </li>
	</ul>
	</div>
	
	
	
	</article>
	);
}

const ContentArea = () => {
	
	const [usernameLogin, setUsernameLogin] = useState("");
	const [emailLogin, setEmailLogin] = useState("");
	const [passwordLogin, setPasswordLogin] = useState("");
	
	const [loginStatus, setLoginStatus] = useState("");
	
	Axios.defaults.withCredentials = true;
	
	const login = () => {
		Axios.post("http://localhost:3001/login", {usersUsername: usernameLogin, usersPassword: passwordLogin,}).then((response) => {
			
			if (response.data.message) {
				setLoginStatus(response.data.message);
			} else {
				setLoginStatus(response.data[0].usersUsername);
				localStorage.setItem('username', JSON.stringify(usernameLogin));
			}
			
		});
	};
	
	useEffect(() => {
		Axios.get("http://localhost:3001/login").then((response) => {
			//console.log(response);
			if (response.data.loggedIn == true) {
				setLoginStatus(response.data.user[0].usersUsername);
			}
			
		});
	}, []);
	
	return (
	<article className='contentArea'>
	
	<h1>Add show password characters inside pwd text fields</h1>
	<h1>Implement redirect to home page function once the user is logged in</h1>
	
	<div id='usernameOrEmailLbl'><label>Username / Email :</label></div>
	
	<div id='usernameOrEmailTxtFld'>
	<input type='text' id='usernameOrEmailTxtFld' name='usernameOrEmailTxtFld' onChange={(e) => {setUsernameLogin(e.target.value)}}></input>
	</div>
	
	<div id='passwordLbl'><label>Password :</label></div>
	
	<div id='passwordTxtFld'>
	<input type='password' id='passwordTxtFld' name='passwordTxtFld' onChange={(e) => {setPasswordLogin(e.target.value)}}></input>
	</div>
	
	<div id='loginBtn'><button onClick={login}>Sign In</button></div>
	<div id='doNotHaveAccLbl'><label>Do not have account?</label></div>
	<div id='toPwdRecPageBtn'><Link to='./PasswordRecovery'>Forgot Password?</Link></div>
	<div id='toSignupPageBtn'><Link to='./Register'>Create Account</Link></div>
	
	<h1>{loginStatus}</h1>
	
	</article>
	);
}


export default LoginAndRegister;