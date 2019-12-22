import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      marginBottom: '20px',
    },
    content: {
      flex: '1 0 auto',
    },
    controls: {
      alignItems: 'center',
      display: 'flex',
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    cover: {
      width: 151,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    tags: {
      margin: theme.spacing(0.5),
    },
  })
);

export default function ListItem(props: any) {
  const classes = useStyles();
  return (
    <Link
      to={{
        pathname: '/blog/' + props.id,
        state: {
          props,
        },
      }}
      style={{ textDecoration: 'none' }}
    >
      <Card className={classes.card} raised={true}>
        <CardMedia className={classes.cover} image={props.imageUrl} title={props.title} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.description}
            </Typography>
            <small>Published: {props.published}</small>
          </CardContent>
          <div className={classes.controls}>
            {props &&
              props.tags &&
              props.tags.map((tag: string) => {
                return <Chip key={tag} className={classes.tags} label={tag} />;
              })}
          </div>
        </div>
      </Card>
    </Link>
  );
}
