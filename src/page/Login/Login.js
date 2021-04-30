import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import AuthService from '../../services/auth.service';
import './Login.css';

const Login = () =>{

  const [vEmail, setEmail] = React.useState("");
  const [vPass, setPass] = React.useState("");
  const [vHelper, setHelper] = React.useState("");
  const [vError, setError] = React.useState(false);
  const [vInvalid, setInvalid] = React.useState("");
  const [vRedirect, setRedirect] = React.useState(false);

  function handleSubmit(){
    AuthService.login(vEmail, vPass).then((response)=>{
      if (response.message === "200"){        
        setInvalid("");
        setRedirect(true);
      }else if(response.message === "401"){
        setInvalid("Correo o contraseña invalidos.");
        setRedirect(false);
      }else if(response.message === "404"){
        setInvalid("El correo no existe.");
        setRedirect(false);
      }
    });
  }

  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="image"/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio Sesión
          </Typography>
          <form className="form"> 
            <TextField variant="outlined" margin="normal" required fullWidth id="email"
              label="Correo Electrónico" name="email" autoComplete="email" autoFocus
              onChange={(e) =>{
                setEmail(e.target.value);
                let reg = new RegExp(/@/g).test(vEmail);
                if(!reg){
                  setError(true);
                  setHelper("Correo invalido");
                }else{
                  setError(false);
                  setHelper("");
                }
              }} error={vError} helperText={vHelper}/>
            <TextField variant="outlined" margin="normal" required fullWidth name="password"
              label="Contraseña" type="password" id="password" autoComplete="current-password"
              onChange={(e)=>{
                setPass(e.target.value);
              }}/>
            <Grid container>
              <label className="errorLabel">{vInvalid}</label>
            </Grid>
            <Button fullWidth variant="contained" color="primary" className={classes.submit}
            onClick={handleSubmit}>
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                    {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {vRedirect && (
          <Redirect to={'/selector'}/>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default Login;

