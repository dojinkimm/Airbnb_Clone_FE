import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


export default function Footer() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </React.Fragment>
  );
}

