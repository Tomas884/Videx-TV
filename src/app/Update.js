import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Update = () => {
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
	<h1>Update Account</h1>
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
	
	// = useState('') this would be for String type
	// = useState(0) this would be for Integer type
	
	const [emailUpdate, setEmailUpdate] = useState('');
	const [usernameUpdate, setUsernameUpdate] = useState('');
	const [passwordUpdate, setPasswordUpdate] = useState('');
	
	const update = () => {
		Axios.post("http://localhost:3001/update", {usersEmail: emailUpdate, usersUsername: usernameUpdate, usersPassword: passwordUpdate}).then((response) => {
			console.log(response);
		});
	}
	
	const updateUsername = () => {
		Axios.post("http://localhost:3001/updateUsername", {usersEmail: emailUpdate, usersUsername: usernameUpdate, usersPassword: passwordUpdate}).then((response) => {
			console.log(response);
		});
	};
	
	const updatePassword = () => {
		Axios.post("http://localhost:3001/updatePassword", {usersEmail: emailUpdate, usersUsername: usernameUpdate, usersPassword: passwordUpdate}).then((response) => {
			console.log(response);
		});
	};
	
	return (
	<article className='contentArea'>
	
	<h1>Add show password in  pwd text fields</h1>
	
	<div id='changeEmailHeading'><h1>Change Email:</h1></div>
	<div id='updEmailLbl'><label>New Email :</label></div>
	<div id='updEmailTxtFld'><input type='text' id='updEmailTxtFld' name='updEmailTxtFld' onChange={(e) => {setEmailUpdate(e.target.value)}}></input></div>
	
	<div id='usrToConfirmAccUpdateTxtFld'><input type='text' id='usrToConfirmAccUpdateTxtFld' name='usrToConfirmAccUpdateTxtFld' placeholder='Current Username' onChange={(e) => {setUsernameUpdate(e.target.value)}}></input></div>
	<div id='pwdToConfirmAccUpdatTxtFld'><input type='password' id='pwdToConfirmAccUpdatTxtFld' name='pwdToConfirmAccUpdatTxtFld' placeholder='Current Password' onChange={(e) => {setPasswordUpdate(e.target.value)}}></input></div>
	
	<div id='updateProfileBtn'><button onClick={update}>Update My Email</button></div>
	
	<div id='changeUsernameHeading'><h1>Change Username:</h1></div>
	<div id='updUsernameLbl'><label>New Username:</label></div>
	<div id='updUsernameTxtFld'><input type='text' name='updUsernameTxtFld' id='updUsernameTxtFld' onChange={(e) => {setEmailUpdate(e.target.value)}}></input></div>
	<div id='emailToConfirmUsrUpdateTxtFld'><input type='text' id='emailToConfirmUsrUpdateTxtFld' name='emailToConfirmUsrUpdateTxtFld' placeholder='Current Email' onChange={(e) => {setUsernameUpdate(e.target.value)}}></input></div>
	<div id='pwdToConfirmUsrUpdateTxtFld'><input type='password' id='pwdToConfirmUsrUpdateTxtFld' name='pwdToConfirmUsrUpdateTxtFld' placeholder='Current Password' onChange={(e) => {setPasswordUpdate(e.target.value)}}></input></div>
	<div id='updateUsernameBtn'><button onClick={updateUsername}>Update My Username</button></div>
	
	<div id='changePasswordHeading'><h1>Change Password:</h1></div>
	<div id='updNewPasswordLbl'><label>New Password:</label></div>
	<div id='updNewPasswordTxtFld'><input type='password' id='updNewPasswordTxtFld' name='updNewPasswordTxtFld' onChange={(e) => {setPasswordUpdate(e.target.value)}}></input></div>
	<div id='repeatNewPwdLbl'><label>Re-enter New Password:</label></div>
	<div id='repeatNewPwdTxtFld'><input type='password' id='repeatNewPwdTxtFld' name='repeatNewPwdTxtFld'></input></div>
	<div id='usrToConfirmPwdUpdateTxtFld'><input id='text' id='usrToConfirmPwdUpdateTxtFld' name='usrToConfirmPwdUpdateTxtFld' placeholder='Current Username' onChange={(e) => {setUsernameUpdate(e.target.value)}}></input></div>
	<div id='pwdToConfirmPwdUpdateTxtFld'><input type='password' id='pwdToConfirmPwdUpdateTxtFld' name='pwdToConfirmPwdUpdateTxtFld' placeholder='Current Password'></input></div>
	<div id='updatePasswordBtn'><button onClick={updatePassword}>Update My Password</button></div>
	
	<div id='toChangePasswordPageLbl'><Link to='./ChangePassword'>Change Password?</Link></div>
	
	</article>
	);
}


export default Update;