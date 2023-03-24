
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import { Link } from "@mui/material";

// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

export default function Profile() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>

      <CssBaseline>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          <Grid >
            <img
              alt="avatar"
              style={{
                width: "100vw",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "relative"
              }}
              src="https://iris2.gettimely.com/images/default-cover-image.jpg"
            />
          </Grid>

          {/* COMPONENTS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              position: "relative",
              top: "-20vh",
              left: "20vw",
              margin: "auto",
              px: { xs: 0, md: 7 }
            }}
          >
            {/* PROFILE CARD */}
            <Grid item md={6}>
              <Card variant="outlined">
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* CARD HEADER START */}
                  <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
                    {/* PROFILE PHOTO */}
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    >
                      <Avatar
                        sx={{ width: 100, height: 100, mb: 1.5 }}
                        src={user.photoURL}
                      ></Avatar>
                    </Badge>

                    {/* DESCRIPTION */}
                    <Typography variant="h6">{user.displayName}</Typography>
                    <Typography color="text.secondary">{user.email}</Typography>
                  </Grid>
                  {/* CARD HEADER END */}

                  {/* DETAILS */}
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography style={styles.details}>trip 1</Typography>
                      <Typography style={styles.details}>trip 2</Typography>
                      <Typography style={styles.details}>trip 3</Typography>
                    </Grid>
                  </Grid>

                  {/* BUTTON */}
                  <Grid item style={styles.details} sx={{ width: "100%" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleLogout}
                      sx={{ width: "99%", p: 1, my: 2 }}
                    >
                      Logout
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}
