// Import modules
import Handler from "./api/eventHandler";
import Parallax from "./api/parallaxText";

// Webpack styles
import "./styles/index.scss";

const initMenu = () => {
    return new Promise(( resolve ) => {
        const menu = new Handler({
            element: "menu",
            css: [ "disappear", "appear" ]
        });

        resolve( menu.onClick( "menu-trigger" ) );
    });
};

const initLoader = () => {
    return new Promise(( resolve ) => {
        const loader = new Handler({
            element: "loader",
            css: "disappear"
        });

        resolve( loader.onTimeout( 1200 ) );
    });
};

const initHeader = () => {
    return new Promise(( resolve ) => {
        const header = new Handler({
            element: "header",
            css: [ "transparence", "opaque" ]
        });

        const offset = document.documentElement.clientHeight;
        resolve( header.onScroll( offset - 100 ) );
    });
};

const initSlogan = () => {
    return new Promise(( resolve ) => {
        const parallax = new Parallax( "slogan", 1.2 );
        resolve( parallax.serve() )
    });
};

const initInfo = () => {
    return new Promise(( resolve ) => {
        const minOffset = document.documentElement.clientHeight,
            info = new Parallax( "info-body", -1.2, minOffset );
        resolve( info.serve() )
    });
};

// Main function.
window.addEventListener("load", () => {
    initMenu()
        .then( initLoader() )
        .then( initHeader() )
        .then( initSlogan() )
        .then( initInfo() );
});

console.log("Hot reloading...");
