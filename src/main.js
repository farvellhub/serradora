// Import modules
import { Handler, Parallax } from "@farvell/jflow-core";
// Webpack styles
import "./styles/index.scss";

const initMenu = () => {
	const menu = new Handler({
		element: "menu",
		css: ["disappear", "appear"]
	});

	return menu.onClick( "menu-trigger" );
};

const initLoader = () => {
	const loader = new Handler({
		element: "loader",
		css: "disappear"
	});

	return loader.onTimeout(1200);
};

const initHeader = () => {
	const header = new Handler({
		element: "header",
		css: [ "transparence", "opaque" ]
	});

	const offset = document.documentElement.clientHeight;
	return header.onScroll( offset - 100 );
};

const initSlogan = () => {
	const slogan = new Parallax({
		target: "slogan", 
		direction: 1.2
	});

	return slogan.listen();
};

const initInfo = () => {
	const info = new Parallax({
		target: "info-body",
		direction: -1.2,
		offset: document.documentElement.clientHeight
	});

	return info.listen();
};

// Main function.
window.addEventListener("load", () => {
	initMenu()
		.then( initLoader() )
		.then( initHeader() )
		.then( initSlogan() )
		.then( initInfo() )
		.then( console.log("Working...") );
});


