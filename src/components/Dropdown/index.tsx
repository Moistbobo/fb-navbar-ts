import React from 'react';
import {CSSTransition} from 'react-transition-group';
import DropdownItem from './DropdownItem';
import './Dropdown.scss';

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const [menuHeight, setMenuHeight] = React.useState(60);

  const calcHeight = (el: any) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const onClick = (targetPage: string) => () => {
    setActiveMenu(targetPage);
  };

  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon="P" onClick={onClick('settings')}>
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon="P" onClick={onClick('main')}>
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
          <DropdownItem leftIcon="P" rightIcon="Q">
            PP test
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
