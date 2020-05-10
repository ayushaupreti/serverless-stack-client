import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Navbar, Nav, NavItem } from "react-bootstrap";
// import { Navbar, Nav, NavItem } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { onError } from "./libs/errorLib";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating && (
      // <div className="App container">
      //   <Navbar fluid collapseOnSelect>
      //     <Navbar.Header>
      //       <Navbar.Brand>
      //         <Link to="/">Scratch</Link>
      //       </Navbar.Brand>
      //       <Navbar.Toggle />
      //     </Navbar.Header>
      //     <Navbar.Collapse>
      //       <Nav pullRight>
      //         {isAuthenticated ? (
      //           <>
      //             <NavItem onClick={handleLogout}>Logout</NavItem>
      //           </>
      //         ) : (
      //           <>
      //             <LinkContainer to="/login">
      //               <NavItem>Login</NavItem>
      //             </LinkContainer>
      //             <LinkContainer to="/signup">
      //               <NavItem>Signup</NavItem>
      //             </LinkContainer>
      //           </>
      //         )}
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      //   <ErrorBoundary>
      //     <AppContext.Provider
      //       value={{ isAuthenticated, userHasAuthenticated }}
      //     >
      //       <Routes />
      //     </AppContext.Provider>
      //   </ErrorBoundary>
      // </div>
      <div className="App container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <ErrorBoundary>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <Routes />
          </AppContext.Provider>
        </ErrorBoundary>
      </div>
    )
  );
}

export default App;
