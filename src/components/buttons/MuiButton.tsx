import React from "react";
import { Button, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MuiButton() {
  return (
    <div>
      {/* By default direction will be column */}
      <Stack spacing={4}>
        <Stack spacing={1} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Container</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        {/* Direction Column */}
        <Stack spacing={1} direction="column">
          <Button variant="text">
            this will be button element we cant use href here
          </Button>
          <Button variant="contained">Container</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Stack>

      <hr />

      <Button variant="text" href="https://www.google.com">
        This will be link element we can use href element
      </Button>

      <hr />

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <hr />

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <hr />

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <hr />

      <Stack display={"block"} spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <hr />

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      <hr />

      <p>Icon Button Component : </p>
      <IconButton aria-label="send" color="success" size="small">
        <SendIcon />
      </IconButton>

      <hr />

      <p>
        Disable Elevation Button Component which removes the shadow around the
        button :{" "}
      </p>
      <Button variant="contained" startIcon={<SendIcon />} disableElevation>
        Send
      </Button>

      <hr />

      <p>
        Disable Ripple Button Component which removes inner ripple effect on
        button
      </p>
      <Button variant="contained" startIcon={<SendIcon />} disableRipple>
        Send
      </Button>
    </div>
  );
}

export default MuiButton;
