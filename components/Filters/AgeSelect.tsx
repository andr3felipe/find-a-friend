"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AgeSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 296 }}>
      <FormControl fullWidth>
        {!age ? (
          <InputLabel
            sx={{
              fontSize: 20,
              fontWeight: 800,
              color: "white",
            }}
            id="demo-simple-select-label"
          >
            Idade
          </InputLabel>
        ) : (
          <InputLabel
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: 20,
              top: -14,
            }}
            id="demo-simple-select-label"
          >
            Idade
          </InputLabel>
        )}

        <Select
          sx={{
            backgroundColor: "var(--select-background)",
            color: "white",
            fontFamily: "Nunito",
            fontSize: 20,
            fontWeight: 800,
            border: "1px solid white",
            ".MuiOutlinedInput-notchedOutline": { borderColor: "none" },
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 630px)": { paddingLeft: 3 },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="age"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Filhote"}
          >
            Filhote
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Adolescente"}
          >
            Adolescente
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Adulto"}
          >
            Adulto
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Idoso"}
          >
            Idoso
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
