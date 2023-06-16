import React, { useCallback, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)


  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div className='
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
        '>
        <img className='h-4 lg:h-7' src="/images/logo.png" alt="Logo" />

        {/* desktop menu */}
        <div
          className='
              flex-row
              ml-8
              gap-7
              hidden
              lg:flex
             '>
          <NavbarItem label='Home' />
          <NavbarItem label='Series' />
          <NavbarItem label='Films' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browser by languages' />
        </div>

        {/* mobile menu */}
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 cursor-pointer ml-8 relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>

        {/* profile menu */}
        <div className='flex flex-row ml-auto gap-7 items-center '>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>

          <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visisble={showAccountMenu} />
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar