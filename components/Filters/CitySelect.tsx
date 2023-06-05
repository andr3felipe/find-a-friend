"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CitySelect() {
  const [city, setCity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box
      sx={{
        minWidth: 200,
      }}
    >
      <FormControl fullWidth>
        {!city ? (
          <InputLabel
            sx={{
              fontSize: 20,
              fontWeight: 600,
              color: "white",
            }}
            id="demo-simple-select-label"
          >
            Cidade
          </InputLabel>
        ) : (
          <InputLabel
            sx={{
              color: "white",
              fontWeight: 500,
            }}
            id="demo-simple-select-label"
          >
            Cidade
          </InputLabel>
        )}

        <Select
          sx={{
            color: "white",
            fontWeight: 600,
            fontSize: 20,
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 630px)": { paddingLeft: 3 },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Cidade"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Recife"}
          >
            Recife
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"São Paulo"}
          >
            São Paulo
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Rio de Janeiro"}
          >
            Rio de Janeiro
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
