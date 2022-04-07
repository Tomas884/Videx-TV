import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const AccountData = () => {
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
	<h1>My Account Details</h1>
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
	
	const [loginStatusUsername, setLoginStatusUsername] = useState("");
	const [loginStatusEmail, setLoginStatusEmail] = useState("");
	const [loginStatusPassword, setLoginStatusPassword] = useState("");
	
	Axios.defaults.withCredentials = true;
	
	const login = () => {
		Axios.post("http://localhost:3001/login", {usersUsername: usernameLogin, usersPassword: passwordLogin,}).then((response) => {
			
			if (response.data.message) {
				setLoginStatusUsername(response.data.message);
				setLoginStatusEmail(response.data.message);
				setLoginStatusPassword(response.data.message);
			} else {
				setLoginStatusUsername(response.data[0].usersUsername);
				setLoginStatusEmail(response.data[0].usersEmail);
				setLoginStatusPassword(response.data[0].usersPassword);
			}
			
		});
	};
	
	useEffect(() => {
		Axios.get("http://localhost:3001/login").then((response) => {
			//console.log(response);
			if (response.data.loggedIn == true) {
				setLoginStatusUsername(response.data.user[0].usersUsername);
				setLoginStatusEmail(response.data.user[0].usersEmail);
				setLoginStatusPassword(response.data.user[0].usersPassword);
			}
			
		});
	}, []);
	
	return (
	<article className='contentArea'>
	
	<div id='toChngAccDataInsideAccDataPage'><Link to='./Update'>Change Account Details?</Link></div>
	
	<div id='myAccData'>
	<h1>Username: {loginStatusUsername}</h1>
	<h1>Email: {loginStatusEmail}</h1>
	<h1>Password: {loginStatusPassword}</h1>
	</div>
	</article>
	);
}


export default AccountData;