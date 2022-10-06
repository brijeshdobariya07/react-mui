import React from "react";
import { Typography } from "@mui/material";

function MuiTyoography() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <p>-------------</p>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <p>-------------</p>

      <Typography variant="body1">
        Body 1 : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
        modi autem ducimus et. Doloribus, vel quibusdam! Quae inventore mollitia
        quas.
      </Typography>
      <Typography variant="body2">
        Body 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
        dolore, tempora eius in harum reprehenderit soluta ad nisi. Quos,
        labore?
      </Typography>
      <hr />
    </div>
  );
}

export default MuiTyoography;
