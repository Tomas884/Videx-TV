import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Delete = () => {
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
	<h1>Delete Account</h1>
	</div>
	
	{
		localStorage.getItem('username') ?
		<>
		     <div id='signoutBtn'>
			     <ul>
				     <li>
					     <Link to=''>Sign Out</Link>
					 </li>
				 </ul>
			 </div>
			 
			 <div id='toAccountSettingsBtn'>
			     <ul>
				     <li>
					     <Link to='./AccountSettings'>Account Settings</Link>
					 </li>
				 </ul>
			 </div>
			 
			 <div id='toMyUploadsBtn'>
			     <ul>
				     <li>
					     <Link to='./MyUploads'>My Uploads</Link>
					 </li>
				 </ul>
			 </div>
			 
			 <div id='toAboutPageBtnSignedIn'>
			     <ul>
				     <li>
					     <Link to='./About'>About</Link>
					 </li>
				 </ul>
			 </div>
			 
			 <div id='toHomePageBtnSignedIn'>
			     <ul>
				     <li>
					     <Link to='./'>Home</Link>
					 </li>
				 </ul>
			 </div>
		</>
		:
		<>
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
		</>
	}
	
	</article>
	);
}

const ContentArea = () => {
	
	const [emailDelete, setEmailDelete] = useState('');
	const [usernameDelete, setUsernameDelete] = useState('');
	const [passwordDelete, setPasswordDelete] = useState('');
	const [reenterPwdDelete, setReenterPwdDelete] = useState('');
	
	const remove = () => {
		Axios.post("http://localhost:3001/remove", {usersEmail: emailDelete, usersUsername: usernameDelete, usersPassword: passwordDelete}).then((response) => {
		console.log(response);	
		});
	};
	
	return (
	<article className='contentArea'>
	
	<div id='deleteAccEmailOrUsernameLbl'><label>Email/Username :</label></div>
	<div id='deleteAccEmailOrUsernameTxtFld'><input type='text' id='deleteAccEmailOrUsernameTxtFld' name='deleteAccEmailOrUsernameTxtFld' onChange={(e) => {setUsernameDelete(e.target.value)}}></input></div>
	
	<div id='deleteAccPwdLbl'><label>Password :</label></div>
	<div id='deleteAccPwdTxtFld'><input type='password' id='deleteAccPwdTxtFld' name='deleteAccPwdTxtFld' onChange={(e) => {setPasswordDelete(e.target.value)}}></input></div>
	
	<div id='deleteAccRepeatPwdLbl'><label>Confirm Password :</label></div>
	<div id='deleteAccRepeatPwdTxtFld'><input type='password' id='deleteAccRepeatPwd' name='deleteAccRepeatPwd'></input></div>
	
	<div id='deleteProfileBtn'><button onClick={remove}>Delete My Profile</button></div>
	
	</article>
	);
}


export default Delete;