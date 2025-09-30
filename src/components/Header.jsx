import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <Link to="/">Home</Link>
            <nav>
                <NavLink 
                    to="/"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    About ISMF
                </NavLink>
                <NavLink
                    to="/divisions"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Divisions
                </NavLink>
                <NavLink
                    to="/research"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Research
                </NavLink>
                <NavLink
                    to="/events"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Events
                </NavLink>
                <NavLink
                    to="/publications"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Publications
                </NavLink>

            </nav>
        
        </>
    )
}