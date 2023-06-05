"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function EnergySelect() {
  const [energy, setEnergy] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEnergy(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 296 }}>
      <FormControl fullWidth>
        {!energy ? (
          <InputLabel
            sx={{
              fontSize: 20,
              fontWeight: 800,
              color: "white",
            }}
            id="demo-simple-select-label"
          >
            Energia
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
            Energia
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
          value={energy}
          label="energy"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"01"}
          >
            01
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"02"}
          >
            02
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"03"}
          >
            03
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
