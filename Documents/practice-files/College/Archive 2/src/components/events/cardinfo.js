import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

<Card sx={{maxWidth:400}}>
      <CardActionArea>
        <CardContent>
       
      <div className='content-1'>
        <h1>Google cloud</h1>
        <p>Team size: 1-2
          Event type: Offline 
          Event 1: Map creation
          Timing: 23/03/23: 8.00 am to 12.00pm
•	The event will be about creating a map for 3rd-first/third person game. 
•	Assets will be given to the respected teams.
•	It is just a drag & drop concept on the game development platform called Unity.
Event 2: Character Creation
Timing: 23/03/23: 1.00 pm to 5.00pm
•	This event will be about creating a 3D character on the platform called blender.
•	Blender is a beginner tool for creations of characters, game assets, etc.."</p>
        <p>Grow in-demand skills in emerging cloud technologies with experts from Google Cloud</p>
        <br></br>
        <p>INR 500</p>

       <div className='data'>
        <h2>Deatails</h2>
        <p>Name:Strigrays League - Gaming Jam</p>
        <p>Type: Competion </p>
        
        <p>Date : 20/2/2023</p>
        <p>Duration and timing of the event : 2 days</p>
        <p>Venue: Class room</p>
        <br></br>
        <h2>Contact</h2>
        <p>Faculty coordinator</p>
        <p>Name :  Dr. Sophiya </p>
        <p>Email ID :Sophiya@gmail.com </p>
        <p>Phone no : 1234567890</p>
        <br></br>
        <p>Student coordinator</p>
        <p>Name :  Dr. Sophiya </p>
        <p>Email ID :Sophiya@gmail.com </p>
        <p>Phone no : 1234567890</p>
       </div>
       <h2>Rules for the Events</h2>
       <p>Requirements:  </p>
       <p>1.	Latest version of Unity/Blender.</p>
        <p>
          
           2.	Pc of i5, 8Gb Ram and at least 2 GB graphics card(Any version: Nvidia/Amd).
          </p>
          <p>3.	No need of prior knowledge on Programming.</p>
          <p>4.	If required, a intro on Unity/Blender will be given to the participants before the event by the club members.</p>


        </div>

        </CardContent>
      </CardActionArea>
    </Card>