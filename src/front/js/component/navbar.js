import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	function handleLogout(){
		actions.logout()
		navigate('/')
	}

	function handleLogout2(){
		actions.logout()
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.auth === true ? <button onClick={()=>handleLogout()} className="btn btn-primary">Logout</button>:null}
				</div>
				<Link to="/">
				{store.auth === true ? <button onClick={()=>handleLogout2()} className="btn btn-primary">Logout Daniel</button>:null}
					
				</Link>
				
			</div>
		</nav>
	);
};
