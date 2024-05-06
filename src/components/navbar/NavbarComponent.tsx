"use client";

import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import ButtonLogin from "@/components/button/ButtonLogin";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const router = useRouter();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const pathname = usePathname();
  const cart = useAppSelector((state) => state.cart.products);
  let cartLength = cart?.length;

  return (
    <>
      {/* <Navbar className="bg-[whitesmoke]">
        <Navbar.Brand href="">
          <Image
            width={1000}
            height={1000}
            src="https://store.istad.co/media/icon_images/favicon.ico"
            className="w-[50px] h-[50px] mr-3 rounded-[50%]"
            alt=""
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mengseu Shopping
          </span>
        </Navbar.Brand>
        <div className="flex justify-center items-center md:order-2">
          <button
            onClick={() => router.push("/cart")}
            className="font-normal mr-2 rounded-lg w-max text-green-600 text-3xl px-3 py-2 relative"
          >
            🛒
            {
              <sup className="bg-red-500 text-white rounded-full w-5 h-5 text-xs absolute -top-1 -right-1">
                {cartLength}
              </sup>
            }
          </button>
          <ButtonLogin />
          <Navbar.Toggle />
        </div>
        <NavbarCollapse>
          {menu.map((item, index) => (
            <NavbarLink
              key={index}
              as={Link}
              href={item.path}
              active={item.path === pathname}
            >
              {item.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar> */}

      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-7 w-auto"
                  src="https://img1.picmix.com/output/stamp/normal/3/1/2/5/2525213_cf584.png"
                  alt=""
                />
                <p className="sr-only">Newjeans</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/"
              >
                Home
              </a>
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/about"
              >
                About Us
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/policy"
              >
                Policy
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                My Shop
              </a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="rounded-full bg-transparent hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <div className="flex justify-center items-center md:order-2">
                      <button
                        onClick={() => router.push("/cart")}
                        className="font-normal mr-2 rounded-lg w-max text-green-600 text-3xl px-3 py-2 relative"
                      >
                        {
                          <sup className="bg-red-500 text-white rounded-full w-5 h-5 text-xs absolute -top-1 -right-1">
                            {cartLength}
                          </sup>
                        }
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </header>
    </>
  );
}
