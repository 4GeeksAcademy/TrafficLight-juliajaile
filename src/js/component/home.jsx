import React from "react";

//include images into your bundle


//create your first component
const Home = () => {
	return (
	<div className="d-flex flex-column justify-content-center align-items-center">
		<div className="traffic-top"></div>
		<div className="container bg-dark p-3 rounded mt-5">
			<div className="red-light bg-danger p-5 mt-3 rounded-circle"></div>
			<div className="yellow-light bg-warning p-5 mt-3 rounded-circle"></div>
			<div className="green-light bg-success p-5 mt-3 rounded-circle"></div>
		</div>
	</div>
	);
};

export default Home;
