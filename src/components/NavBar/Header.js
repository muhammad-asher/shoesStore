import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrandLogo } from "../../assets";
import "./Header.css";
export default function Header() {
	return (
		<nav>
			<Navbar collapseOnSelect expand="lg">
				<Navbar.Brand href="/">
					<img src={BrandLogo} width={40} height={40} alt="logo" />
					<span className="brandName"> Shoes Inc.</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse
					className="justify-content-end"
					id="responsive-navbar-nav"
				></Navbar.Collapse>
			</Navbar>
		</nav>
	);
}
