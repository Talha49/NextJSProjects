"use client";
import Button from '@/Components/Button/button';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { menuItems } from '@/utils';
import { signIn, signOut, useSession } from 'next-auth/react';
import { MenuItem } from '@/utils/type';
import { usePathname, useRouter } from 'next/navigation';
import { GlobalContext } from '@/Context';

const Header = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const { setSearchResults, setSearchQuery } = useContext(GlobalContext);
  const pathName = usePathname();
  const router = useRouter();

  const handleSticky = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    setSearchResults([]);
    setSearchQuery('');
  }, [pathName, setSearchQuery, setSearchResults]);

  useEffect(() => {
    window.addEventListener('scroll', handleSticky);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center shadow-md ${
          sticky
            ? 'fixed z-[9999] bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-primary dark:bg-opacity-20'
            : 'absolute'
        }`}
        style={{ padding: '1rem', height: '4rem' }} // Adjusted padding and height
      >
        <div className="container" style={{ margin: '0 auto', maxWidth: '95%' }}>
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-48 max-w-full px-4 xl:mr-12">
              <Link
                href={'/'}
                className={`font-extrabold cursor-pointer  w-full ${
                  sticky ? 'py-3 lg:py-2' : 'py-6'
                }`} // Adjusted font size and padding
              >
                <p className="ml-3  text-xl">
                  <span className='font-medium text-green-600 text-3xl'>L</span>uminary<span className="text-orange-500">Logs</span>
                </p>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? 'top-[7px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? 'top-[-8px] -rotate-45' : ''
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? 'visible top-full opacity-100'
                      : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Render the buttons inside the navigation menu */}
                  <div className="lg:hidden flex flex-col gap-4 mt-4">
                    {session !== null ? (
                      <Button onClick={() => router.push('/Create')} text="Create" />
                    ) : null}
                    <Button
                      onClick={session !== null ? () => signOut() : () => signIn('github')}
                      text={session !== null ? 'LogOut' : 'LogIn'}
                    />
                  </div>
                </nav>
              </div>

              <div className="hidden lg:flex gap-2 items-center justify-end pr-8 lg:pr-0">
                {session !== null ? (
                  <Button onClick={() => router.push('/Create')} text="Create" />
                ) : null}
                <Button
                  onClick={session !== null ? () => signOut() : () => signIn('github')}
                  text={session !== null ? 'LogOut' : 'LogIn'}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
