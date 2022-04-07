import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Home = () => {
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
	<h1>Home</h1>
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
	
	const [loginStatus, setLoginStatus] = useState("");
	
	Axios.defaults.withCredentials = true;
	
	const login = () => {
		Axios.post("http://localhost:3001/login", {usersUsername: usernameLogin, usersPassword: passwordLogin,}).then((response) => {
			
			if (response.data.message) {
				setLoginStatus(response.data.message);
			} else {
				setLoginStatus(response.data[0].usersUsername);
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
	
	
	<h1>{loginStatus}</h1>
	
	</article>
	);
}


export default Home;