import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    backgroundColor: "#E9F1FF",
    borderRadius: "16px"
  },
  ".MuiChip-deleteIcon": {
    color: "#0363C4"
  }
});

export default function CheckboxesTags() {
  const [data, SetData] = React.useState([])

  React.useEffect( ()=>{
    fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete')
    .then(response => response.json())
    .then(data => {console.log(data); SetData(data)})
    .catch(error => console.error(error));
  }, [])
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      ChipProps={{ color: "warning" }}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )}
      limitTags={5}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label="Input"
          helperText=""
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Tooltip title={`${option.name}`} key={option.id}>
            <StyledChip
              {...getTagProps({ index })}
              variant="filled"
              label={`${option.name}`}
              deleteIcon={<ClearIcon />}
            />
          </Tooltip>
        ))
      }
    />
  );
}
