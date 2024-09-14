import PropTypes from "prop-types";
import { Fragment, useContext, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ProjectFormContext } from "../../context/ProjectFormContext";
import { RxCross2 } from "react-icons/rx";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({ initial, options, label, name }) => {
  const { setProjectDetails } = useContext(ProjectFormContext);
  const [selected, setSelected] = useState(
    Array.isArray(initial) ? initial : [initial]
  );

  useEffect(() => {
    setProjectDetails((prev) => ({
      ...prev,
      [name]: selected,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, selected]);

  const handleChange = (newSelection) => {
    setSelected((prev) => {
      const uniqueSelection = newSelection.filter(
        (item) => !prev.some((prevItem) => prevItem.id === item.id)
      );
      return [...prev, ...uniqueSelection];
    });
  };

  const handleRemove = (e, item) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <Listbox value={selected} onChange={handleChange} multiple>
      {({ open }) => (
        <>
          <Listbox.Label className="w-fit text-sm font-medium leading-6">
            {label}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative min-h-[36px] p-1 w-full cursor-pointer rounded-md bg-black/20 hover:bg-black/30 transition-all text-left text-gray-200 shadow-sm ring-0 focus:outline-none sm:text-sm sm:leading-6">
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                {Array.isArray(selected) &&
                  selected.length > 0 &&
                  selected.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center bg-white/20 rounded-md py-1 gap-2 text-xs px-1 pr-2"
                    >
                      <img
                        src={item.avatar}
                        alt=""
                        className="h-5 w-auto flex-shrink-0 aspect-square rounded-md"
                      />
                      <span className="block truncate">{item.name}</span>
                      <span onClick={(e) => handleRemove(e, item)}>
                        <RxCross2 />
                      </span>
                    </div>
                  ))}
              </div>
              <span className="pointer-events-none absolute bottom-[0.4rem] right-0 flex items-center pr-2">
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#323232] text-white py-1 text-base shadow-lg ring-0 focus:outline-none sm:text-sm">
                {options.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-yellow-500 text-black" : "",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9 transition-all"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-5 w-auto flex-shrink-0 aspect-square"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected && (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-yellow-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4 transition-all"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  initial: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  name: PropTypes.string.isRequired,
};
