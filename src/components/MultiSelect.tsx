import { useEffect, useRef, useState } from "react";

const MultiSelect = () => {
  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const usStatesWithDefaults = [
    { name: "Alabama", selected: false },
    { name: "Alaska", selected: false },
    { name: "Arizona", selected: false },
    { name: "Arkansas", selected: false },
    { name: "California", selected: false },
    { name: "Colorado", selected: false },
    { name: "Connecticut", selected: false },
    { name: "Delaware", selected: false },
    { name: "Florida", selected: false },
    { name: "Georgia", selected: false },
    { name: "Hawaii", selected: false },
    { name: "Idaho", selected: false },
    { name: "Illinois", selected: false },
    { name: "Indiana", selected: false },
    { name: "Iowa", selected: false },
    { name: "Kansas", selected: false },
    { name: "Kentucky", selected: false },
    { name: "Louisiana", selected: false },
    { name: "Maine", selected: false },
    { name: "Maryland", selected: false },
    { name: "Massachusetts", selected: false },
    { name: "Michigan", selected: false },
    { name: "Minnesota", selected: false },
    { name: "Mississippi", selected: false },
    { name: "Missouri", selected: false },
    { name: "Montana", selected: false },
    { name: "Nebraska", selected: false },
    { name: "Nevada", selected: false },
    { name: "New Hampshire", selected: false },
    { name: "New Jersey", selected: false },
    { name: "New Mexico", selected: false },
    { name: "New York", selected: false },
    { name: "North Carolina", selected: false },
    { name: "North Dakota", selected: false },
    { name: "Ohio", selected: false },
    { name: "Oklahoma", selected: false },
    { name: "Oregon", selected: false },
    { name: "Pennsylvania", selected: false },
    { name: "Rhode Island", selected: false },
    { name: "South Carolina", selected: false },
    { name: "South Dakota", selected: false },
    { name: "Tennessee", selected: false },
    { name: "Texas", selected: false },
    { name: "Utah", selected: false },
    { name: "Vermont", selected: false },
    { name: "Virginia", selected: false },
    { name: "Washington", selected: false },
    { name: "West Virginia", selected: false },
    { name: "Wisconsin", selected: false },
    { name: "Wyoming", selected: false },
  ];
  const [openModel, setOpenModel] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [selectedStates, setSelectedStates] = useState(usStatesWithDefaults);

  const filteredStates = selectedStates.filter((state) => state.selected);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenModel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  return (
    <>
      <div className="flex flex-col items-center pt-10 h-full bg-slate-300">
        <div className="relative">
          <button
            onClick={() => setOpenModel(!openModel)}
            className=" bg-white w-[250px] px-8 py-2"
          >
            {filteredStates.length > 0
              ? filteredStates.length + " " + "stats selected"
              : "Select Multiple Stats"}
          </button>
          {openModel && (
            <div
              ref={dropDownRef}
              className="bg-white w-[500px] mt-1 p-2 absolute h-[300px] overflow-y-scroll grid grid-cols-3 gap-2"
            >
              {usStates.map((state: any, index) => (
                <div
                  key={index}
                  className={`flex items-center p-1 gap-2 ${
                    selectedStates[index].selected ? "bg-[#e9f4f8]" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedStates[index].selected}
                    onChange={(e) => {
                      const newSelectedStates = [...selectedStates];
                      newSelectedStates[index].selected = e.target.checked;
                      setSelectedStates(newSelectedStates);
                    }}
                  />
                  <span>{state}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiSelect;
