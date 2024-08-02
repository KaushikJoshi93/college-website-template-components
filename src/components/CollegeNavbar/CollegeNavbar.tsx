import React, { useState } from 'react'
import '../../index.css'

type MenuItem = {
  name: string
  link: string
  subMenu: Array<MenuItem>
}

type MenuItemProp = {
  item: MenuItem
  bgColor: string
}
const MenuItemComponent = ({ item, bgColor }: MenuItemProp) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleMouseEnter = () => setIsSubMenuOpen(true)
  const handleMouseLeave = () => setIsSubMenuOpen(false)

  return (
    <li className='menu_item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        href={item.link}
        onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = `${bgColor}`)}
        onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = '#fff')}
      >
        {item.name}
      </a>
      {item.subMenu.length > 0 && (
        <ul className={`submenu_container ${isSubMenuOpen ? 'open' : ''}`}>
          {item.subMenu.map((subItem, index) => (
            <MenuItemComponent item={subItem} key={index} bgColor={bgColor} />
          ))}
        </ul>
      )}
    </li>
  )
}

type NavbarProp = {
  items: MenuItem[]
  logoPath: string
  bgHexColor: string
}

const Navbar = ({ items: menuItems, logoPath, bgHexColor }: NavbarProp) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className='college_navbar_container'>
      {/* College Logo */}
      <div className='college_logo_container'>
        <img src={logoPath} id='companyLogo' alt='College Logo' />
        <div className='hamburger-menu' onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>

      {/* Menu items */}
      <ul className='menu_items_container' style={{ display: showMobileMenu ? 'flex' : '' }}>
        {menuItems.map((item: MenuItem, index: number) => (
          <MenuItemComponent item={item} key={index} bgColor={bgHexColor} />
        ))}
      </ul>
    </div>
  )
}

export default Navbar
