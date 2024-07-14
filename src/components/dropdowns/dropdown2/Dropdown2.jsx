import React from 'react';
import * as d from './Dropdown2.module.css';

const Dropdown2 = () => {
    return (
        <div className={d.body}>
            <nav>

                <ul className={d.links}>
                    <li>
                        <a>Upload</a>
                    </li>
                    <li>
                        <a>Licence</a>
                    </li>
                    <li>
                        <div className={d.dropdown}>
                            <a>
                                <p>Explore</p>
                                <span className="material-icons"> expand_more </span>
                            </a>
                            <div className={d.menu}>
                                <a>Discover Photos</a>
                                <a>Popular Searches</a>
                                <a>Leaderboard</a>
                                <a>Challenges</a>
                                <a>Free Videos</a>
                                <a>Pexels Blog</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <button type="button">Join</button>
            </nav>
        </div>
    )
}

export default Dropdown2;
