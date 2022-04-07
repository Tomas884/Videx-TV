import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

const About = () => {
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
	<h1>About</h1>
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
	<div id='aboutTxt'>
	<p>© 2022 Videx TV Project Developed by Tomas Grabauskas.</p>
	<p>Videx TV is focused to allow users to watch videos online, enabling video creators to share their videos by uploading them to Videx TV Platform and receive <br/>
	comments, likes or dislikes and gain subscribers. This platform is totally free to use and allowing any category video creators to upload theirs contents. Video creators<br/>
	can share their types of contents such as Music, Vlogs, Educational and even Entertainment to the public.</p>
	<h1>What do you need to know:</h1>
	<p>You must to create a new account in order to be able to upload videos onto your own account, be able to like or dislike and even leave comments onto creators videos. Videx TV have features to allow<br/>
	users to Register, Login to theirs existing user accounts, logged in users have ability to change their own account details, changing password, recovering password in case the user has<br/> 
	forgotten its password, and to delete account. Watching videos DOES NOT require to have an account, but it is compulsory to have an account if the user wants to drop a like or dislike, comment<br/> on videos, subscribe or unsubscribe, also to upload videos, creators<br/> 
	must have an account so they could have a control over their own contents, for example so the users could upload, check number of views per video, view number of subscribers, deleting videos<br/> from their own account.</p>
	</div>
	</article>
	);
}


export default About;