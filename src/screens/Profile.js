import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection, getDocs, orderBy } from "@firebase/firestore";
import { useEffect } from "react";

import { styled } from "@mui/material/styles";
import { db } from "../firebase";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1",
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499",
  },
};
const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24 },
];
export default function Profile() {
  const [history, setHistory] = React.useState([]);

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
  useEffect(() => {
    const getHistory = async () => {
      if (user) {
        const ref = collection(db, user.uid);
        const data = await getDocs(ref, orderBy("timestamp"));
        setHistory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };
    getHistory();
  }, [user]);

  return (
    <>
      <Navbar navlinks={navlinks} />
      <CssBaseline>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          <Grid>
            <img
              alt="avatar"
              style={{
                width: "100vw",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "relative",
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* PROFILE CARD */}
            <Grid className="sm:w-full" item md={6}>
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
                        src={user && user.photoURL}
                      ></Avatar>
                    </Badge>

                    {/* DESCRIPTION */}
                    <Typography variant="h6">
                      {user && user.displayName}
                    </Typography>
                    <Typography color="text.secondary">
                      {user && user.email}
                    </Typography>
                  </Grid>
                  {/* CARD HEADER END */}

                  {/* DETAILS */}
                  <Grid container>
                    <TableContainer style={{ margin: 20 }} component={Paper}>
                      <Table
                        sx={{ minWidth: 700 }}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Date-Time</StyledTableCell>
                            <StyledTableCell align="right">
                              Destination
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              Duration
                            </StyledTableCell>
                            <StyledTableCell align="right">PDF</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {history.map((row) => (
                            <StyledTableRow key={row.city}>
                              <StyledTableCell component="th" scope="row">
                                {("" + new Date(row.timestamp)).substring(
                                  0,
                                  25
                                )}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {row.city}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {row.duration}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                <Link to={row.url} target="_blank">
                                  <FileOpenIcon />
                                </Link>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>

                  {/* BUTTON */}
                  <Grid
                    item
                    className="flex items-center justify-center"
                    style={styles.details}
                    sx={{ width: "100%" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="button-emrald flex items-center justify-center"
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
