import React from 'react';
import './DropdownItem.scss';

interface Props {
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  onClick?: () => void;
}

const DropdownItem: React.FC<Props> = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className="dropdown-item" onClick={onClick}>
    <span className="button">{leftIcon}</span>
    {children}
    <span className="button">{rightIcon}</span>
  </a>
);

export default DropdownItem;
