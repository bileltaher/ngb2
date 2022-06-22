import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthService } from "../../services/auth.service";
import Image from "../../photos/LoginBanner.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"© Our Big Blue - All rights reserved "}
      {new Date().getFullYear()}
      <br />
      {"This website was created in the framework of the CEPF"}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    AuthService.login(data.get("email"), data.get("password"))
      .then(() => history.push("/"))
      .catch((error) => {
        setPasswordError(error.response.data["passwordincorrect"] ?? "");
        setEmailError(error.response.data["email"] ?? "");
        setEmailError(error.response.data["emailnotfound"] ?? "");
      });
  };

  return (
    <div style={{ padding: "1em", margin: "1em" }}>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => {
                    setEmailError("");
                    setEmail(e.target.value);
                  }}
                  value={email}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                {emailError && (
                  <div style={{ fontSize: "12", width: "100%", color: "red" }}>
                    {emailError}
                  </div>
                )}
                <br />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    setPasswordError("");
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {passwordError && (
                  <div style={{ fontSize: "12", width: "100%", color: "red" }}>
                    {passwordError}
                  </div>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>

                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
