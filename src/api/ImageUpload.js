import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageUpload = () => {
  return (
    <>
      <Grid container direction="row" sx={{ height: "100vh" }}>
        <Grid item lg={2} xs={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} xs={9}>
          <Main />
        </Grid>
      </Grid>
    </>
  );
};

export default ImageUpload;
