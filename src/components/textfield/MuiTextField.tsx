import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

function MuiTextField() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <p>First Group</p>
      <Stack direction="column" spacing={2}>
        <TextField label="name" />
        <TextField
          label="same as without specifying variant"
          variant="outlined"
        />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      <p>Second Group</p>
      <Stack direction="column" spacing={2}>
        <TextField label="name" color="secondary" size="small" />
        <TextField
          label="same as without specifying variant"
          variant="outlined"
          size="medium"
          color="warning"
        />
        <TextField label="Filled" variant="filled" color="success" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      <p>Required Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField label="Required Form Input" required />
      </Stack>

      <p>Helper Text Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Required Form Input"
          required
          helperText="Helper Input : Name should be capital"
        />
      </Stack>

      <p>Password Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField
          type="password"
          label="Password"
          required
          helperText="Do not share your password with anyone"
        />
      </Stack>

      <p>Disable Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField
          type="password"
          label="Password"
          required
          helperText="Do not share your password with anyone"
          disabled
        />
      </Stack>

      <p>Readonly Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField value={100} InputProps={{ readOnly: true }} />
      </Stack>

      <p>Input Adorment Form Input</p>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      <p>Error Props Example with usestate</p>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value
              ? "Required, Type something to see the effect"
              : "Do not share your password with anyone"
          }
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
