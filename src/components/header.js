import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
//import { Gradient } from "uigradients"
import { Menu } from "antd"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "antd"

const Header = ({ siteTitle }) => {
  const { SubMenu } = Menu

  const [mail, setMailActive] = useState("mail")

  const handleClick = e => {
    console.log("click")
  }

  return (
    <div>
      <Menu onClick={() => handleClick} selectedKeys={mail}>
        <Menu.Item key="mail">
          <MailOutlined />
          Contact
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <AppstoreOutlined />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
/* const Header = ({ siteTitle }) => {
  return (
    <Gradient preset="frost">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </Gradient>
  )
} */

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
