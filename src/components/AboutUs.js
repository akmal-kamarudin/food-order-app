import React from "react";
import pic1 from "../images/about-pic1.jpg";
import pic2 from "../images/about-pic2.jpg";
import pic3 from "../images/about-pic5.jpg";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const AboutUs = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: 3 }}
    >
      <Typography
        variant="h4"
        color={grey[900]}
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "1.5rem",
            md: "2rem",
            lg: "2.2rem",
          },
        }}
      >
        Taste The Experience
      </Typography>
      <Grid container direction={{ md: "row", xs: "column" }} sx={{ py: 4 }}>
        <Grid item xs={6} sx={{ px: 2 }}>
          <Typography
            variant="h5"
            color={grey[900]}
            sx={{
              fontWeight: "bold",
              my: 1,
              fontSize: {
                xs: "1.2rem",
                md: "1.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Food that calms the heart
          </Typography>

          <Typography
            variant="h6"
            color={grey[900]}
            sx={{
              mb: 3,
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
                lg: "1.2rem",
              },
            }}
          >
            Lorem ipsum dolor sit amet. Eum sapiente alias aut molestias earum id commodi
            vitae ut quod ipsam eum maiores consequatur in dicta voluptas. Ut repudiandae
            illum aut optio quia aut quas adipisci aut voluptate recusandae qui enim
            illum. In voluptas laboriosam ut dolor odio et nihil quas ut nihil nihil ab
            modi quisquam. Cum minus nisi est cupiditate sunt aut velit tempore hic velit
            suscipit est dolorem numquam aut rerum laborum.
          </Typography>

          <Typography
            variant="h5"
            color={grey[900]}
            sx={{
              fontWeight: "bold",
              my: 1,
              fontSize: {
                xs: "1.2rem",
                md: "1.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Ambience surrounding..
          </Typography>

          <Typography
            variant="h6"
            color={grey[900]}
            sx={{
              pb: 6,
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
                lg: "1.2rem",
              },
            }}
          >
            Eum sapiente quae sed perspiciatis internos ut fugiat libero. Est quasi vitae
            non voluptates minus est iure placeat est expedita dolore ut neque tempora et
            obcaecati possimus.
          </Typography>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={6}
          sx={{ px: 2, position: "relative" }}
        >
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              width: 340,
              top: "5%",
              left: "15%",
              zIndex: 1,
              position: {
                md: "normal",
                lg: "absolute",
              },
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            alt="pic1"
            src={pic1}
          />

          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              width: 340,
              top: "15%",
              left: "50%",
              zIndex: 2,
              position: {
                md: "normal",
                lg: "absolute",
              },
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            alt="pic2"
            src={pic2}
          />

          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              width: 340,
              top: "40%",
              left: "30%",
              zIndex: 3,
              position: {
                md: "normal",
                lg: "absolute",
              },
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            alt="pic3"
            src={pic3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
