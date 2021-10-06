import React from 'react';
import './NavItem.scss';

interface Props {
  icon: string | React.ReactNode;
}

const NavItem: React.FC<Props> = ({children, icon}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="nav-item">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen((prev) => !prev)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
};

export default NavItem;
