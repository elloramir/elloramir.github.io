import React from 'react';
import Blog from './blog.jsx';
import Projects from './projects.jsx';
import Cats from './cats.jsx';
import Games from './games.jsx';

export default function Navigator() {
    const [active, setActive] = React.useState(-1);
    
    const navItems = [
        {
            hash: "blog",
            icon: "bi-substack",
            label: "Blog",
            component: <Blog />
        },
        {
            hash: "projects",
            icon: "bi-boombox-fill",
            label: "Projects",
            component: <Projects />
        },
        {
            hash: "games",
            icon: "bi-joystick",
            label: "Games",
            component: <Games />
        },
        {
            hash: "cats",
            icon: "bi-chat-left-heart-fill",
            label: "My cats",
            component: <Cats />
        },
    ];

    React.useEffect(() => {
        const hash = window.location.hash?.slice(1);
        const index = navItems.findIndex(item => item.hash === hash);
        setActive(index === -1 ? 0 : index);
    }, []);

    return (
        <div className="col-lg-8 pb-5 right-bar">
            <div className="navigator mt-4">
                <ul className="nav h5 d-flex justify-content-center flex-wrap border-bottom">
                    {active !== -1 && navItems.map((item, index) => (
                        <li key={index} className="nav-item" onClick={() => setActive(index)}>
                            <a
                                href={`#${item.hash}`}
                                className={`nav-link text-black pb-3${index === active ? " active" : ""}`}
                                role="button"
                            >
                                <i className={`bi ${item.icon}`}></i> {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mt-5">
                {navItems[active]?.component}
            </div>
        </div>
    );
}