import React from "react";
import games from "./data/games.json";

export default
function Games() {
	return (
		<>
		{
			games.map((post, index) => (
				<div key={index} className="card mt-4">
					<div className="card-body">
						<h5 className="card-title pb-2 border-bottom">
							<i className={`bi ${post.icon} me-2`}></i>
							<span>{post.name}</span>
						</h5>
						<p className="card-text text-muted">{post.text}</p>
						<a href={post.url} target="_blank">
							<i className="bi bi-box-arrow-up-right"></i>
							<span> View</span>
						</a>
					</div>
				</div>	
			))
		}
		</>
	)
}