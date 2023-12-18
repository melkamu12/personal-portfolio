import React from "react";
import { logo } from "../../assets";
const Navbar = () => {
  const navLinksdata = [
    {
      _id: 1001,
      title: "Home",
      link: "home",
    },
    {
      _id: 1002,
      title: "Features",
      link: "features",
    },
    {
      _id: 1003,
      title: "Projects",
      link: "projects",
    },
    {
      _id: 1004,
      title: "Resume",
      link: "resume",
    },
    {
      _id: 1005,
      title: "Testimonial",
      link: "testimonial",
    },
    {
      _id: 1006,
      title: "Contacts",
      link: "contacts",
    },
  ];
  return (
    <div className="w-full h-20 max-auto flex justify-between items-center font-titleFont">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex item-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              {title}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
