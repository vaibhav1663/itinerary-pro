import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import { LockOutlined } from "@mui/icons-material";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />


                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://img.freepik.com/free-vector/eco-tourism-concept_23-2148628567.jpg?w=740&t=st=1679658562~exp=1679659162~hmac=cec3ea9baad413328504ae92a2d0686517a78eede858cd5fb050c6800971e89c)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src="logo512.png" sx={{ m: 4, p: 2, background: 'linear-gradient(to bottom,#10b981, #22c55e)', width: 150, height: 150 }}>
                            <LockOutlined />
                        </Avatar>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Box sx={{ mt: 1 }}>
                            <Typography component="h1" variant="h5">
                                Login to start the journey
                            </Typography>

                        </Box>
                        <Box sx={{ mt: 1 , marginTop: "30px"}}>
                            <GoogleButton
                                className="g-btn"
                                type="dark"
                                onClick={handleGoogleSignIn}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
