import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({ options, label }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="w-fit text-sm font-medium leading-6">
            {label}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-black/20 py-1.5 pl-3 pr-10 text-left text-gray-200 shadow-sm ring-0 focus:outline-none sm:text-sm sm:leading-6">
              <span className={`flex items-center`}>
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-auto  flex-shrink-0 aspect-square"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white/90 backdrop-blur-3xl py-1 text-base shadow-lg ring-0 focus:outline-none sm:text-sm">
                {options.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-yellow-500 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9 transition-all"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className={`flex items-center`}>
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-5 w-auto flex-shrink-0 aspect-square"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate col-span-5"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-yellow-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4 transition-all"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
Dropdown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  width: PropTypes.string,
};
