import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Dashboard from "./dashboard.js"
import './dash.css'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <div className='history'>
    <div>
      <h1>Hello</h1>
    </div>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="../assets/google.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Event Name: Google cloud
              </Typography>
              <Typography variant="body2" gutterBottom>
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Registered day 
              </Typography>
            <Typography variant="subtitle1" component="div">
              paid:  200
            </Typography>
            </Grid>
          </Grid>
          <Grid item>
          </Grid> 
        </Grid>
      </Grid>
    </Paper> 
    <Dashboard />

     </div>

  );
}