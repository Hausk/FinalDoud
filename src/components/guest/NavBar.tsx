'use client'
import { Disclosure} from '@headlessui/react'
import { Menu as Hamburger, X } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button';
import { Separator } from "@/components/ui/separator"
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';




export function NavBar() {
  const pathName = usePathname()
  return (
    <Disclosure as="nav" className="bg-transparent fixed w-dvw backdrop-blur-md z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center sm:hidden justify-around">
                {/* Mobile menu button*/}
                <Drawer>
                  <DrawerTrigger className="relative inline-flex items-center justify-center rounded-md p-2 text-white">
                      <p className="block h-6 w-6" aria-hidden="true">menu</p>
                  </DrawerTrigger>
                  <DrawerContent className="flex flex-col justify-between">
                    <div className="w-full h-16">
                    <DrawerClose asChild>
                      <div className="h-16 absolute top-5 rounded-md text-white flex right-5">
                        <X className="block w-fit m-auto" aria-hidden="true" size={32} />
                      </div>
                    </DrawerClose>
                    </div>
                    <DrawerHeader className="">
                      <DrawerTitle className="text-red-500 text-left text-xs px-3 mb-4">Navigation</DrawerTitle>
                      <Separator className="my-4" />
                      <DrawerDescription>
                        <Link href="/" 
                          className={cn("block rounded-md px-3 py-2 text-4xl font-medium text-left", pathName === '/' ? 'text-red-500' : 'text-white')}
                        >
                          Accueil
                        </Link>
                        <Link href="/works"
                          className={cn("block rounded-md px-3 py-2 text-4xl font-medium text-left", pathName.startsWith('/works') ? 'text-red-500' : 'text-white')}
                        >
                          Projets
                        </Link>
                        <Link href="/contact"
                          className={cn("block rounded-md px-3 py-2 text-4xl font-medium text-left", pathName === '/contact' ? 'text-red-500' : 'text-white')}
                        >
                          Me contacter
                        </Link>
                      </DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter className="m-0">
                        <Separator className="my-4" />
                        <DrawerTitle className="text-xs text-red-500">SOCIALS</DrawerTitle>
                        <div className="flex mt-2">
                          <Link href="/" className="text-sm text-left text-white">INSTAGRAM</Link>
                          <Link href="/works" className="text-sm text-left text-white mx-7">FACEBOOK</Link>
                          <Link href="/contact" className="text-sm text-left text-white">TIKTOK</Link>
                        </div>
                      </DrawerFooter>
                  </DrawerContent>
                  </Drawer>
              </div>
              <div className="flex items-center mr-2 sm:items-stretch sm:justify-between">
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