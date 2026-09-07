import React from "react";
import posts from "./data/cats.jsx";

export default
function Cats() {
	return (
		<>
		{
			posts.map((post, index) => (
				<div key={index} className="card mt-3">
					<img src={post.image} className="card-img-top" alt="My cat image (imagine something really cute)" />
					<div className="card-footer">
						<p className="card-text text-muted">
							<i className="bi bi-tag-fill me-2"></i>
							<span>Cat: <b> {post.name}</b></span>
						</p>
					</div>
				</div>	
			))
		}
		</>
	)
}