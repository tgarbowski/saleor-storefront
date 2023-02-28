import Link from "next/link";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import ReactSVG from "react-svg";

import { IconButton } from "@components/atoms";
import { paths } from "@paths";
import { logo } from "@styles/BrandingConstants";
import { commonMessages } from "@temp/intl";

import backImg from "../../images/arrow-back.svg";
import NavItem, { INavItem } from "./NavItem";

import "./scss/index.scss";

interface NavListProps {
  items: INavItem[];
  hideOverlay(): void;
}

interface NavListState {
  parent: INavItem | null;
  displayedItems: INavItem[];
}

class NavList extends React.PureComponent<NavListProps, NavListState> {
  state: NavListState = {
    displayedItems: this.props.items,
    parent: null,
  };

  handleShowSubItems = (item: INavItem) => {
    this.setState({ parent: item, displayedItems: item.children });
  };

  handleGoBack = () => {
    const grandparent = this.state.parent.parent;

    if (!grandparent) {
      this.setState({ parent: null, displayedItems: this.props.items });
    } else {
      const newParent = this.findItemById(grandparent.id);
      this.setState({
        displayedItems: newParent.children,
        parent: newParent,
      });
    }
  };

  findItemById(id: string): INavItem {
    let match = null;
    function find(item) {
      if (item.id === id) {
        match = item;
        return true;
      }
      return item.children && item.children.some(find);
    }
    this.props.items.some(find);
    return match;
  }

  render() {
    const { hideOverlay } = this.props;
    const { displayedItems, parent } = this.state;

    const defaultCloseIcon = !!hideOverlay;

    return (
      <ul>
        {parent ? (
          <li className="side-nav__menu-item side-nav__menu-item-back">
            <span onClick={this.handleGoBack}>
              <ReactSVG path={backImg} /> {parent.name}
            </span>
          </li>
        ) : (
          <>
            <li className="side-nav__menu-item side-nav__menu-item--parent">
              <Link href={paths.home}>
                <a className="side-nav__menu-item-logo">
                  <ReactSVG path={logo} onClick={hideOverlay} />
                </a>
              </Link>
              {defaultCloseIcon && (
                <IconButton
                  name="x"
                  size={15}
                  onClick={hideOverlay}
                  testingContext="closeOverlayButton"
                />
              )}
            </li>
            <li className="side-nav__menu-item">
              <Link href={paths.home}>
                <a className="side-nav__menu-item-link">
                  <span onClick={hideOverlay}>
                    <FormattedMessage {...commonMessages.home} />
                  </span>
                </a>
              </Link>
            </li>
          </>
        )}
        {displayedItems.map(item => {
          return item.name === "Detal" || item.name === "Mix" ? null : (
            <NavItem
              key={item.id}
              hideOverlay={hideOverlay}
              showSubItems={this.handleShowSubItems}
              {...item}
            />
          );
        })}
      </ul>
    );
  }
}

export default NavList;
