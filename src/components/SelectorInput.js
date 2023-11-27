import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectorInput({
  data,
  state,
  setter,
  title,
  name,
  handleSelectorChange,
}) {
  const handleChange = (event) => {
    handleSelectorChange(name, event.target.value);
    setter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={title}
          onChange={handleChange}
        >
          {data.map((data, key) => (
            <MenuItem key={key} value={data}>
              {data}
            </MenuItem>
          ))}
          ;
        </Select>
      </FormControl>
    </Box>
  );
}
