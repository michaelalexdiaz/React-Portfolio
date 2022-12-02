import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MultiActionAreaCard({Title, Github, Webpage, Image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Button color="primary">
                <a href={Github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={Webpage} target="_blank" rel="noreferrer">Site</a>
        </Button>
      </CardActions>
    </Card>
  );
}
