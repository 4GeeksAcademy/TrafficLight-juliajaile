import React, {useState, useRef} from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const[glowingColor, setGlowingColor] = useState("red");
	const ref = useRef(null);

	const handleChangeColor = () => {
		let colors = ["red","yellow","green"];
		let i = 0;
		if(ref.current) {clearInterval(ref.current)}
		ref.current= setInterval(() => {
			setGlowingColor(colors[i]);
			i = i+1;
		}, 1000);
			
	}

	return (
	<div className="d-flex flex-column justify-content-center align-items-center">
		<div className="traffic-top"></div>
		<div className="container bg-dark p-3 rounded">
			<div onClick={()=> setGlowingColor("red")} className={"light" + ((glowingColor === "red")? " red": " ") + ((glowingColor === "red")? " glow": " ")}></div>
			<div onClick={()=> setGlowingColor("yellow")} className={"light" + ((glowingColor === "yellow")? " yellow": " ") + ((glowingColor === "yellow")? " glow": " ")}></div>
			<div onClick={()=> setGlowingColor("green")} className={"light" + ((glowingColor === "green")? " green": " ") + ((glowingColor === "green")? " glow": " ")}></div>
		</div>
		<div>
			<button onClick={handleChangeColor} className="btn btn-primary mt-3">Change color!</button>
		</div>
	</div>
	);
};

export default Home;
