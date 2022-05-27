import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import Output from "../Output/Output";
import InputField from "../../common/InputField/InputField";
import CategoryData from "../../JSON Files/categories.json";
import ShipperData from "../../JSON Files/shippers.json";
import CustomTable from "../../common/CustomTable/CustomTable";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("Customers");
  const [showOutput, setShowOutput] = useState(false);
  const [input, setInput] = useState({ textInputValue: "" });
  const { textInputValue } = input;
  const handleChange = (input) => {
    setInput({ textInputValue: input });
  };

  function outputHandler() {
    setShowOutput(true);
  }
  const categoryColumns = [
    { field: "categoryID", header: "Category ID" },
    { field: "name", header: "Category Name" },
    { field: "description", header: "Category Description" },
  ];
  const shipperColumns = [
    { field: "shipperID", header: "Shipper ID" },
    { field: "companyName", header: "Company Name" },
    { field: "phone", header: "Contact Number" },
  ];
  return (
    <div className="home">
      <div className="home-select">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Select Query
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            label="Query"
          >
            <MenuItem value="Customers">Customer Query</MenuItem>
            <MenuItem value="Categories">Category Query</MenuItem>
            <MenuItem value="Shippers">Shipper Query</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon />}
            onClick={outputHandler}
            // disabled={!textInputValue}
          >
            Run
          </Button>
        </div>
      </div>
      {query === "Customers" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value={textInputValue} onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput ? (
              <div className="output">
                <Output />
              </div>
            ) : (
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <h4>Enter Query and Run the program to view its output</h4>
              </div>
            )}
          </div>
        </div>
      )}
      {query === "Categories" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value="CREATE TABLE CATEGORY" onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput ? (
              <div className="output">
                <CustomTable data={CategoryData} columns={categoryColumns} />
              </div>
            ) : (
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <h4>Enter Query and Run the program to view its output</h4>
              </div>
            )}
            {/* <div className="output">
              <CustomTable data={CategoryData} columns={categoryColumns} />
            </div> */}
          </div>
        </div>
      )}
      {query === "Shippers" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value="CREATE TABLE SHIPPERS" onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput ? (
              <div className="output">
                <CustomTable data={ShipperData} columns={shipperColumns} />
              </div>
            ) : (
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <h4>Enter Query and Run the program to view its output</h4>
              </div>
            )}
            {/* <div className="output">
              <CustomTable data={ShipperData} columns={shipperColumns} />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
