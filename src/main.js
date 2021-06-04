// Import modules
import { Handler, Parallax } from "@farvell/jflow-core";
// Webpack styles
import "./styles/index.scss";

const initMenu = () => {
	const menu = new Handler({
		element: "menu",
		css: ["disappear", "appear"]
	});

	return menu.onClick("menu-trigger");
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
		css: ["transparence", "opaque"]
	});

	const offset = document.documentElement.clientHeight;
	return header.onScroll(offset - 100);
};

const initSlogan = () => {
	const parallax = new Parallax("slogan", 1.2);
	return parallax.serve();
};

const initInfo = () => {
	const minOffset = document.documentElement.clientHeight,
		info = new Parallax("info-body", -1.2, minOffset);
	return info.serve();
};

// Main function.
window.addEventListener("load", () => {
	initMenu()
		.then(initLoader())
		.then(initHeader())
		.then(initSlogan())
		.then(initInfo());
});

console.log("Hot reloading...");
