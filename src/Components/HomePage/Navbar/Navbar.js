import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-light fixed-top text-white" : "navbar  navbar-expand-lg navbar-light fixed-top"}>
            <div class="container-fluid">

                <div>
                    <a className="navbar-brand  h1 text-dark" >The Portrait Studio</a>
                </div>

                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <a class="nav-link text-dark" >Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" aria-current="page" >About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" >Service & Package</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" >Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" >Package</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" >FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" >Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;