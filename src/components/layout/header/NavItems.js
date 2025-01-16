import React from "react";
import Navitem from "./Navitem";
// import DropdownDemoes from "./DropdownDemoes";
// import DropdownPages from "./DropdownPages";
// import DropdownCourses from "./DropdownCourses";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
// import DropdownDashboard from "./DropdownDashboard";
// import DropdownEcommerce from "./DropdownEcommerce";

const NavItems = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      // dropdown: <DropdownDemoes />,
      isRelative: false,
    },
    {
      id: 2,
      name: "About",
      path: "/about",
      // dropdown: <DropdownPages />,
      isRelative: false,
    },
    {
      id: 3,
      name: "Events",
      path: "/blogs",
      // dropdown: <DropdownCourses />,
      isRelative: false,
    },
    {
      id: 4,
      name: "Courses",
      path: "course-grid",
      // dropdown: <DropdownCourses />,
      isRelative: false,
    },
    {
      id: 5,
      name: "Support Us",
      path: "/courses/1",
   
      isRelative: false,
    },
    {
      id: 6,
      name: "Contact Us",
      path: "/contact",
     
      isRelative: false,
    }
   
  ];
  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul className="nav-list flex justify-center">
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx: idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
