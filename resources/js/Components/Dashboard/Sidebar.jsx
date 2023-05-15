import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

export default function Sidebar() {
    return (
        <aside className="sidenav bg-default navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none opacity-8 text-white" aria-hidden="true" id="iconSidenav" />
                <Link className="navbar-brand m-0" href={route('home')} target="_blank">
                    <span className="ms-1 font-weight-bold">Laravel Inertia React Starter</span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <Nav className="navbar-nav">
                    <Nav.Link className={`${route().current('dashboard') && 'active'}`}>
                        <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                        </div>
                        <span className="nav-link-text ms-1">Dashboard</span>
                    </Nav.Link>
                    <NavDropdown title={<span><i className="ni ni-settings-gear-65 mr-2" /> Settings</span>} id="settings-dropdown">
                        <NavDropdown.Item className={`${route().current('profile') && 'active'}`} href={route('profile')}>
                            <span className="nav-link-text ms-1">Profile</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span><i className="ni ni-settings-gear-65 mr-2" /> Manage</span>} id="manage-dropdown">
                        <NavDropdown.Item className={`${route().current('users.*') && 'active'}`} href={route('users.index')}>
                            <span className="nav-link-text ms-1">Users</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className={`${route().current('admins.*') && 'active'}`} href={route('admins.index')}>
                            <span className="nav-link-text ms-1">Admin</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as="a" method="post" href={route('logout')}>
                        <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-sign-out-alt text-danger text-sm opacity-10" />
                        </div>
                        <span className="nav-link-text ms-1">Log out</span>
                    </Nav.Link>
                </Nav>
            </div>
        </aside>

    )
}
