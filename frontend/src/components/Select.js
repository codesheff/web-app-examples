import React from "react";

import { MultiSelect } from "react-multi-select-component";
// import "./styles.css";

const Select = ({ options, selected, setSelected }) => {
  return (
    <div className="App">
      <h1>Select Fruits</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        isCreatable={false}
      />
    </div>
  );
};

export default Select;
