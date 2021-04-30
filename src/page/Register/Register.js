import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Redirect } from 'react-router';
import './Register.css';
import AuthService from '../../services/auth.service';

const Register = () => {

  const [vEmail, setEmail] = React.useState("");
  const [vHelper, setHelper] = React.useState("");
  const [vError, setError] = React.useState(false);
  const [vNombre, setNombre] = React.useState("");
  const [vApellido, setApellido] = React.useState("");
  const [vPass, setPass] = React.useState("");
  const [vRedirect, setRedirect] = React.useState(false);

  function handleSubmit(){
    AuthService.register(vNombre, vApellido, vEmail, vPass).then(response=>{
      if (response.message === 200){

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
            Registro
          </Typography>
          <form className="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name" variant="outlined" required fullWidth id="name" label="Nombre" autoFocus
                  onChange={(e)=>{
                    setNombre(e.target.value);
                  }}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined" required fullWidth id="lastname" label="Apellido" name="lastname"
                  onChange={(e)=>{
                    setApellido(e.target.value);
                  }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth id="email" label="Correo Electrónico"
                  name="email" onChange={(e) =>{
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
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="password"
                  label="Contraseña" type="password" id="password" autoComplete="current-password"
                  onChange={(e)=>{
                    setPass(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" color="primary" className={classes.submit}
            onClick={handleSubmit}>
              Registrar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Tienes una cuenta? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          {vRedirect && (
          <Redirect to={'/login'}/>
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




export default Register;