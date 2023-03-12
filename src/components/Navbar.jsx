import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const headers = [
    {
      id:1,
      title: 'Jobs',
      link: '/jobs'
    },
    {
      id:2,
      title: 'Companies',
      link: '/jobs'
    },
    {
      id:3,
      title: 'About',
      link: '/jobs'
    },
    {
      id:4,
      title: 'Contact',
      link: '/jobs'
    },
    {
      id:5,
      title: 'Blog',
      link: '/jobs'
    },
    {
      id:6,
      title: 'Login',
      link: '/jobs'
    },
    {
      id:7,
      title: 'Register',
      link: '/jobs'
    },
  ]
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu hidden md:flex gap-8">
        {
          headers.map(({id,title,link}) => (
            <Link key={id}  to={link} smooth className="menuList text-[#6f6f6f] hover:text-blueColor">{title}</Link>

          ))
        }
      </div>
      <div onCLinkck={() => setNav(!nav)} className="pr-2 z-10 cursor-pointer flex md:hidden text-blueColor">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav && (
        <div className="flex w-full h-screen flex-col justify-center bg-blue-200 items-center top-0 right-0 gap-2">
          {
            headers.map(({id,title,link}) =>(
              <Link key={id} to={link} smooth className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">{title}</Link>
            ))
          }
      </div>
      )}
    </div>
  )
}

export default Navbar