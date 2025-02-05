import React from 'react';

export default
function Profile() {
	return (
		<div className="col-lg-4 header">
	        <div className="text-center">
	            <img className="profile" src="../images/profile.png" alt="Elloramir's profile picture" />
	            <h1 className="text-white">Elloramir</h1>
	            <p className="fs-5 text-light">Hi there 👋.<br/>I was wating for you.</p>

	            <div className="h1 text-success">
	                <a className="text-reset mx-2" href="https://github.com/elloramir" target="_blank">
	                    <i className="bi bi-github"></i>
	                </a>
	                <a className="text-reset mx-2" href="#" title="@elloramir">
	                    <i className="bi bi-discord"></i>
	                </a>
	                <a className="text-reset mx-2" href="https://x.com/elloramir" target="_blank">
	                    <i className="bi bi-twitter"></i>
	                </a>
	            </div>
	        </div>

	        <div className="d-lg-none anim-updown">
	        	<i className="bi bi-hand-index-thumb text-white h1"></i>
	        </div>
	    </div>
	)
}