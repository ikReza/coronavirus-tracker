import React from "react";
import { Box, Typography } from "@material-ui/core";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" className={styles.container}>
      <Typography variant="subtitle2" className={styles.typoLeft}>
        API: https://covid19.mathdro.id/api
      </Typography>
      <Typography variant="subtitle2" className={styles.typoRight}>
        2020 © Ibrahim Kaiser
      </Typography>
    </Box>
  );
};

export default Footer;
