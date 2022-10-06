import React from "react";
import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";

function MuiButtonGroup() {
  return (
    <div>
      <p>------------------------Button Group-----------------------------</p>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <p></p>

      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left")}>Left</Button>
          <Button onClick={() => alert("Center")}>Center</Button>
          <Button onClick={() => alert("Right")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}

export default MuiButtonGroup;
