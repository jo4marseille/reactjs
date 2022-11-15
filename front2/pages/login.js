import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const Login = () => {

const [values, setValues] = useState({
	email: "",
	pass: "",
	showPass: false,
});

const handlePassVisibilty = () => {
	setValues({
		...values,
		showPass: !values.showPass,
	});
};

const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#00bc7d ',
          '&:hover': {
          background: '#3acf9e',

          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {

          '&:focus': {
          border: '1px solid #3acf9e',

          },
        },
      },
    },
}
});

	return (

		<ThemeProvider theme={mainTheme}>
<Container maxWidth="sm">
<Grid
	container
	spacing={2}
	direction="column"
	justifyContent="center"
	style={{ minHeight: "100vh" }}
>
<Paper elelvation={2} sx={{ padding: 5 }}>
<form>
<Grid container direction="column" spacing={2}>
	<Grid item>
		<TextField
			type="email"
			fullWidth
			label="Entrez votre adresse mail"
			placeholder="adresse mail"
			variant="outlined"
			required
		/>
	</Grid>

	<Grid item>
	<TextField
		type={values.showPass ? "text" : "password"}
		fullWidth
		label="Mot de passe"
		placeholder="Mot de passe"
		variant="outlined"
		required
		InputProps={{
			endAdornment: (
				<InputAdornment position="end">
					<IconButton
						onClick={handlePassVisibilty}
						aria-label="toggle password"
						edge="end"
					>
						{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</InputAdornment>
			),
		}}
	/>
	</Grid>

	<Grid item>
	<Button type="submit" fullWidth variant="contained">
		Se connecter
	</Button>
	</Grid>
</Grid>
</form>
</Paper>
</Grid>
</Container>
</ThemeProvider>
	);
};

export default Login;
