'use client'
import React from "react";
import { FaFacebookF,FaCircleChevronDown, FaSquareXTwitter, FaSkype, FaInstagram, FaSquareGithub, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarItem, Link, NavbarMenuToggle } from "@nextui-org/react";

export default function Nav({ resumeData }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "HOME",
        "ABOUT",
        "RESUME",
        "WORKS",
        "TESTIMONIALS",
        "CONTACT",
    ];

    return (
        <div id="Header" className="font-mono">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item) => (
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link>
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="flex flex-col gap-24 justify-between">
                <div className="flex-col w-full">
                    <h1 className="text-[72px]">I'm {resumeData.firstname}<br />{resumeData.lastname}.</h1>
                    <h3 className="responsive-headline"><span>{resumeData.tech}</span></h3>
                    <h3><span className="text-slate-500">I'm a {resumeData.role} specialized in</span> <span>React</span> <span className="text-slate-500">and </span><span>Node.js</span>.<span className="text-slate-500"> Let's </span> <br />
                        <a href="#about"> start scrolling </a>
                        <span className="text-slate-500"> and learn more </span> <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <div className="social flex justify-center gap-5 mt-8">
                        <FaFacebookF />
                        <FaSquareXTwitter />
                        <FaGooglePlusG />
                        <FaLinkedinIn />
                        <FaInstagram />
                        <FaSquareGithub />
                        <FaSkype />
                    </div>
                </div>
                <div className="social flex justify-center">
                <FaCircleChevronDown />
            </div>
            </div>
        </div>
    );
}
