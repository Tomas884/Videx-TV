import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const PasswordRecovery = () => {
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
	<h1>Password Recovery</h1>
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
	return (
	<article className='contentArea'>
	
	<div id='pwdRecoveryEmailLbl'><label>Email :</label></div>
	<div id='pwdRecoveryEmailTxtFld'><input type='text' id='pwdRecoveryEmailTxtFld' name='pwdRecoveryEmailTxtFld'></input></div>
	<div id='pwdRecoveryBtn'><button type='submit' name='pwdRecoveryButton' onClick='validateForm(this.form)'>Recover Password</button></div>
	
	</article>
	);
}


export default PasswordRecovery;