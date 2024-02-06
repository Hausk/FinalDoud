'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FacebookIcon, Menu as Hamburger, LucideFacebook, X } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { TikTok } from '@/lib/icons'
export function NavBar() {
  return (
    <Disclosure as="nav" className="bg-transparent fixed w-dvw backdrop-blur-md z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Hamburger className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
                <div className="flex justify-between">
                  <Link
                    href="#"
                    className="transition duration-150 ease-in-out hover:text-blue-500 m-auto "
                  >
                    <FaFacebook size={24} className='m-auto' />
                  </Link>
                  <Link
                    href="#"
                    className="transition duration-150 ease-in-out hover:text-orange-500 m-auto mx-5"
                  >
                    <FaInstagram size={24} className='m-auto'/>
                  </Link>
                  <Link
                    href="#"
                    className="transition duration-150 ease-in-out hover:text-slate-500 m-auto "
                  >
                  <FaTiktok size={24} className='m-auto' />
                  </Link>
                </div>
                <div className="hidden items-center md:flex">
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                    width={100}
                    height={32}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 w-full">
                    <Link href="/" className="transition duration-150 ease-in-out bg-transparent text-foreground hover:bg-red-500 rounded-md px-3 py-2 text-sm font-medium">Accueil</Link>
                    <Link href="/works" className="transition duration-150 ease-in-out bg-transparent text-foreground hover:bg-red-500 rounded-md px-3 py-2 text-sm font-medium">Projets</Link>
                    <Link href="/contact" className="transition duration-150 ease-in-out bg-transparent text-foreground hover:bg-red-500 rounded-md px-3 py-2 text-sm font-medium">Me contacter</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link href="/works" className="block rounded-md px-3 py-2 text-base font-medium">Projets</Link>
              <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium">Me contacter</Link>
              <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium">Accueil</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
  }
  