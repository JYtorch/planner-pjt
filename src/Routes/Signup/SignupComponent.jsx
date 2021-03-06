import * as React from 'react';
import {CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, Typography} from '@mui/material';
import initialScreen from "./initial_screen.png";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { SignupPageButton, SignupPageLink, SignupInput, SignupPageLabel, Copyright } from './SignupComponent.styles';

const SignupComponent = () => {  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log()
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirm: data.get('passwordConfirm'),
      phone: data.get('phone'),
    });
  };  
  
  return (
      <Grid container component="main" sx={{ height: '100vh', width: '1920px' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={8}
          sx={{
            backgroundImage: `url('${initialScreen}')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#8C7B80',
            // backgroundColor: (t) =>
            // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={4} component={Paper} elevation={6} square backgroundColor="#F6F6F6" sx={{height: "100%"}}>
          <Box
            sx={{
              my: 8,
              mr: 8,
              // mx: {
              //   xs: 0,
              //   sm: 0
              // },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 25, 
            }}
          >

            <Typography component="h1" variant="h4" color="#6F6F6F" fontFamily="Rozha One">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%'}}>


              {/* ?????? ??? */}
              <Grid container direction='row' alignItems='center' sx={{ mt: '1em'}}>
                <Grid item xs={4}>
                  <SignupPageLabel htmlFor="name">??????</SignupPageLabel>                  
                </Grid>
                <Grid item xs={6}>
                  <SignupInput
                    required
                    fullWidth                    
                    id="name"
                    name="name"          
                    />  
                </Grid>             
              </Grid>
              

              {/* ????????? ??? */}
              <Grid container direction='row' alignItems='center' sx={{ mt: '1em'}}>
                <Grid item xs={4} >
                  <SignupPageLabel htmlFor='email'>?????????</SignupPageLabel>
                </Grid>
                <Grid item xs={6}>
                  <SignupInput
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus              
                    />                
                </Grid>
              </Grid>


              {/* ???????????? ??? */}
              <Grid container direction='row' alignItems='center' sx={{ mt: '1em'}}>
                <Grid item xs={4} >
                  <SignupPageLabel htmlFor='password'>????????????</SignupPageLabel>
                </Grid>
                <Grid item xs={6}>
                  <SignupInput
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>


              {/* ???????????? ?????? ??? */}
              <Grid container direction='row' alignItems='center' sx={{ mt: '1em'}}>
                <Grid item xs={4} >
                  <SignupPageLabel htmlFor='passwordConfirm' >???????????? ??????</SignupPageLabel>
                </Grid>
                <Grid item xs={6}>
                  <SignupInput
                    required
                    fullWidth
                    name="passwordConfirm"
                    type="password"
                    id="passwordConfirm"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>


              {/* ????????? ??? */}
              <Grid container direction='row' alignItems='center' sx={{ mt: '1em'}}>

                <Grid item xs={4}>
                  <SignupPageLabel htmlFor='phone'>?????????</SignupPageLabel>
                </Grid>
                <Grid item xs={4.5}>
                  <SignupInput                    
                    required
                    fullWidth
                    id="phone"
                    // placeholder='ex. 010-1234-1234'
                    name="phone"
                    autoComplete="email"
                    autoFocus                   
                    />
                </Grid>

                
                {/* ?????? ?????? ???????????? ????????? ?????? ?????? ??? */}
                {/* <LoadingButton loading variant="outlined">Submit</LoadingButton> */}  
                <SignupPageButton sx={{ ml: 1.3 }}>
                  ??????
                </SignupPageButton>
                  
                
              </Grid>

              
              <Grid container sx={{mt: '2em'}}>

                {/* ????????? ???????????? ?????? ?????? */}
                <Grid item xs={4} />
                <Grid item xs={7}>
                  
                  <FormControlLabel
                    control={
                      <Checkbox 
                        value="consent"                         
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />} 
                        sx={{color: '#6F6F6F', 
                            backgroundColor: '#F6F6F6',                            
                            '&.Mui-checked': {color: '#6F6F6F'}, 
                          }}
                      />
                    }
                    label={
                      <Typography 
                        sx={{ fontFamily: 'Noto Sans CJK KR', fontWeight: 'normal', color: 'rgba(95, 95, 95, 1)'}}
                      >
                      ????????? ??????????????? ???????????????.
                      </Typography>
                    }
                  />
                </Grid>
                
                {/* ???????????? ??????  */}
                <Grid item xs={4} />
                <Grid item xs={6} sx={{mt: '1em'}}>
                  <SignupPageButton type="submit" sx={{ width: '100%'}}>
                    ????????????
                  </SignupPageButton>
                </Grid>
              </Grid>



              <Grid container sx={{mt: '1em', justifyContent: 'center'}}>

                {/* ????????? ????????? ?????? ?????? */}
                <Grid item xs={3} />
                <Grid item xs={3}>
                  <SignupPageLink href="#" variant="body2" sx={{fontWeight: '600'}}>
                    ?????????
                  </SignupPageLink>
                </Grid>

                {/* ????????? ??????, ???????????? ?????? ?????? */}
                <Grid item>
                  <SignupPageLink href="#" variant="body2" sx={{color: '#959595', m: '0.5em'}}>
                    ????????? ??????                                      
                  </SignupPageLink>
                  <span style={{border: '1px solid #E5E5E5',transform: 'rotate(90deg)'}}></span>
                
                  <SignupPageLink href="#" variant="body2" sx={{color: '#959595', m: '0.5em'}}>
                    ???????????? ??????
                  </SignupPageLink>                
                </Grid>

              </Grid>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};

export default SignupComponent;