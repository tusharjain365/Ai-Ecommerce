import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "/cart",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 1,
    name: "T-Shirt",
    color: "White and black",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$100",
  },
  {
    id: 1,
    name: "Jeans",
    color: "Blue",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
  },
  {
    id: 1,
    name: "Shoes",
    color: "White",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
  },
  {
    id: 1,
    name: "Watch",
    color: "Silver",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
  },
  {
    id: 1,
    name: "Bag",
    color: "Black",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
  },
  // More products...
];

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: false },
      { value: "tees", label: "Tees", checked: false },
      { value: "objects", label: "Objects", checked: true },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
    ],
  },
];
const activeFilters = [{ value: "objects", label: "Objects" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="bg-white">
        {/* Mobile filter dialog */}
        <Transition show={open}>
          <Dialog className="relative z-40 sm:hidden" onClose={setOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* <div className="mx-auto max-w-7xl px-0 py-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Workspace sale
          </h1>
          
        </div> */}

        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>

          <div className="border-b border-gray-200 bg-white pb-2 pt-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ focus }) => (
                            <Link
                              to={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              <button
                type="button"
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                onClick={() => setOpen(true)}
              >
                Filters
              </button>

              <div className="hidden sm:block">
                <div className="flow-root">
                  <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                    {filters.map((section, sectionIdx) => (
                      <Popover
                        key={section.name}
                        className="relative inline-block px-4 text-left"
                      >
                        <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          {sectionIdx === 0 ? (
                            <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                              1
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </PopoverButton>

                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <PopoverPanel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <form className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </form>
                          </PopoverPanel>
                        </Transition>
                      </Popover>
                    ))}
                  </PopoverGroup>
                </div>
              </div>
            </div>
          </div>

          {/* Active filters */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
              <h3 className="text-sm font-medium text-gray-500">
                Filters
                <span className="sr-only">, active</span>
              </h3>

              <div
                aria-hidden="true"
                className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
              />

              <div className="mt-2 sm:ml-4 sm:mt-0">
                <div className="-m-1 flex flex-wrap items-center">
                  {activeFilters.map((activeFilter) => (
                    <span
                      key={activeFilter.value}
                      className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                    >
                      <span>{activeFilter.label}</span>
                      <button
                        type="button"
                        className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Remove filter for {activeFilter.label}
                        </span>
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white overflow-y-auto">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl mb-6 text-[#444444] text-center font-bold">
            All Product :
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <div>
                    <Link
                      to="/detail"
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      More Details
                      <span className="sr-only"> {product.name}</span>
                    </Link>
                  </div>

                  <div>
                    <Link
                      to={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add Bag
                      <span className="sr-only"> {product.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
