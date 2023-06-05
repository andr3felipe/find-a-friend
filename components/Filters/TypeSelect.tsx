"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function TypeSelect() {
  const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150, maxWidth: 210, maxHeight: 48 }}>
      <FormControl fullWidth>
        {!type ? (
          <InputLabel
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "var(--text)",
            }}
            id="demo-simple-select-label"
          >
            Filtrar por tipo
          </InputLabel>
        ) : (
          <InputLabel
            sx={{
              color: "var(--text)",
              fontWeight: 600,
              fontSize: 14,
              top: -7,
            }}
            id="demo-simple-select-label"
          >
            Filtrar por tipo
          </InputLabel>
        )}
        <Select
          sx={{
            backgroundColor: "var(--select-type-background)",
            color: "var(--text)",
            fontFamily: "Nunito",
            fontSize: 16,
            fontWeight: 400,
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
          value={type}
          label="type"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            selected
            value={"Gatos e Cachorros"}
          >
            Gatos e Cachorros
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
            value={"Gatos"}
          >
            Gatos
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            value={"Cachorros"}
          >
            Cachorros
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
