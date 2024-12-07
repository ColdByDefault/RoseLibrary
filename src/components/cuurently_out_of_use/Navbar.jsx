import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AuthContext } from "../context/AuthContext";

function Navbar2({ setActiveComponent }) {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = user
    ? ["Dashboard", "Activity", "Analytics", "Settings", "Log Out"]
    : ["Features", "Customers", "Integrations"];

  const handleLogout = () => {
    logOut();
    setActiveComponent("Home"); // Redirect to home after logging out
  };

  return (
    <Navbar disableAnimation isBordered>
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Brand */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <h1 className="text-xl mr-5">
            ROSE<span className="absolute text-sm translate-y-[2px]">.Library</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navbar */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <h1 className="text-xl mr-24">
            ROSE<span className="absolute text-sm translate-y-[2px]">.Library</span>
          </h1>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            {item === "Log Out" ? (
              <Button
                auto
                flat
                color="error"
                onClick={handleLogout}
                className="cursor-pointer"
              >
                {item}
              </Button>
            ) : (
              <Link
                color="foreground"
                className="cursor-pointer"
                onClick={() => setActiveComponent(item)}
              >
                {item}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Sign-Up and Login Buttons */}
      <NavbarContent justify="end">
        {!user ? (
          <>
            <NavbarItem>
              <Link
                color="foreground"
                className="cursor-pointer"
                onClick={() => setActiveComponent("Login")}
              >
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                auto
                flat
                color="warning"
                onClick={() => setActiveComponent("SignUp")}
                className="cursor-pointer"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : null}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item === "Log Out" ? (
              <Button
                auto
                flat
                color="error"
                onClick={handleLogout}
                className="w-full"
              >
                {item}
              </Button>
            ) : (
              <Link
                className="w-full cursor-pointer"
                color="foreground"
                onClick={() => setActiveComponent(item)}
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navbar2;
