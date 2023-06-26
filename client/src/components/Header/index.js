import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Auth from '../../utils/auth';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='bg-black text-light py-2'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/'>
            <img src={logo} alt='logo graphic Camarco Consulting Innovating Solutions' style={{ maxWidth: '150px' }} />
          </Link>
          <div className='text-center'>
            <h1 className='display-4 m-0'>Camarco Consulting LLC</h1>
            <Navbar expand='lg' className='justify-content-center mt-2'>
              <Nav>
                <Nav.Link as={Link} to='/' className='text-light'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/services' className='text-light'>
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to='/contact' className='text-light'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
          <Navbar expand='lg'>
            <Navbar.Toggle aria-controls='navbar-nav' />
            <Navbar.Collapse id='navbar-nav'>
              <Nav>
                {Auth.loggedIn() ? (
                  <>
                    <Link className='nav-link' to='/me'>
                      {Auth.getUser().data.username}
                    </Link>
                    <button className='btn btn-light m-2' onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                    <Link className='nav-link' to='/signup'>
                      Signup
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default Header;
