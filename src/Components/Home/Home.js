import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import "./Home.css";
import Output from "../Output/Output";

function Home() {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  function outputHandler() {
    setShowOutput(true);
  }
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon />}
            onClick={outputHandler}
            disabled={!input}
          >
            Run
          </Button>
        </div>
      </div>
      <div className="home-container">
        <div className="home-textField">
          <form>
            <textarea
              rows="30"
              cols="85"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></textarea>
          </form>
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
    </div>
  );
}

export default Home;
