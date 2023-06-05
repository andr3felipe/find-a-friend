"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function UFSelect() {
  const [uf, setUf] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setUf(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 75 }}>
      <FormControl fullWidth>
        {!uf ? (
          <InputLabel
            sx={{
              fontSize: 20,
              fontWeight: 600,
              color: "white",
              marginTop: 0.35,
            }}
            id="demo-simple-select-label"
          >
            UF
          </InputLabel>
        ) : (
          <InputLabel
            sx={{ color: "white", fontWeight: 500 }}
            id="demo-simple-select-label"
          >
            UF
          </InputLabel>
        )}

        <Select
          sx={{
            color: "white",
            fontFamily: "Nunito",
            fontSize: 20,
            fontWeight: 600,
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 630px)": { paddingLeft: 3 },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={uf}
          label="UF"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"SP"}
          >
            SP
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"MA"}
          >
            MA
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"RJ"}
          >
            RJ
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
