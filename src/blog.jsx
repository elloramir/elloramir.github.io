import React from "react";
import posts from "./data/blog.jsx";

export default
function Blog() {
	return (
		<>
		{
			posts.map((post, index) => (
				<div key={index} className="card">
					<div className="preview" style={{backgroundImage: `url(${post.image})`}}>
						<div className="fill">
							<button className="btn btn-primary call-action">
								<i className="bi bi-arrows-angle-expand me-2"></i>
								<span>See it</span>
							</button>
						</div>
					</div>
					<div className="card-body">
						<h5 className="card-title pb-2 border-bottom">
							<i className="bi bi-star-fill me-2"></i>
							<span>{post.name}</span>
						</h5>
						<p className="card-text text-muted">{post.text}</p>
					</div>
				</div>	
			))
		}
		</>
	)
}