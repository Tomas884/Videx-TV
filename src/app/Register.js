import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const Register = () => {
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
	<h1>Create New Account</h1>
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
	
	const [emailRegister, setEmailRegister] = useState('');
	const [usernameRegister, setUsernameRegister] = useState('');
	const [passwordRegister, setPasswordRegister] = useState('');
	const [reenterPwdRegister, setReenterPwdRegister] = useState('');
	
	const register = () => {
		Axios.post("http://localhost:3001/register", {usersEmail: emailRegister, usersUsername: usernameRegister, usersPassword: passwordRegister}).then((response) => {
			console.log(response);
		});
	};
	
	return (
	<article className='contentArea'>
	
	<h1>Add Show Password Characters inside pwd text fields</h1>
	
	<div id='emailLbl'><label>Email :</label></div>
	<div id='emailTxtFld'><input type='text' id='emailTxtFld' name='emailTxtFld' onChange={(e) => {setEmailRegister(e.target.value)}}></input></div>
	
	<div id='usernameLbl'><label>Username :</label></div>
	<div id='usernameTxtFld'><input type='text' id='usernameTxtFld' name='usernameTxtFld' onChange={(e) => {setUsernameRegister(e.target.value)}}></input></div>
	
	<div id='pwdLbl'><label>Password :</label></div>
	<div id='pwdTxtFld'><input type='password' id='pwdTxtFld' name='pwdTxtFld' onChange={(e) => {setPasswordRegister(e.target.value)}}></input></div>
	
	<div id='reenterPwdLbl'><label>Re-enter Password :</label></div>
	<div id='reenterPwdTxtFld'><input type='password' id='reenterPwdTxtFld' name='reenterPwdTxtFld' onChange={(e) => {setReenterPwdRegister(e.target.value)}}></input></div>
	
	<div id='selectProfilePicLbl'><label>Select Profile Picture (Optional) :</label></div>
	<div id='browseImageBtn'><button>Browse</button></div>
	
	<div id='signupBtn'><button onClick={register}>Sign Up</button></div>
	
	</article>
	);
}


export default Register;