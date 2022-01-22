import react from "react";
import {Link} from "react-router-dom"

import AppHeader from "../../components/AppHeader";

export default function Home(){
	return(
		<>
		<h1>Home</h1>
		<Link to="login">Login</Link>
		</>
	);
}
