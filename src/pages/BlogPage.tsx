import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import MarkdownRenderer from 'react-markdown-renderer';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import Header from '../components/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: '200px',
      paddingRight: '200px',
      paddingTop: '50px',
    },
    divider: {
      marginBottom: '50px',
    },
    paper: {
      padding: '50px',
    },
    tags: {
      margin: theme.spacing(0.5),
    },
    title: {
      paddingBottom: '10px',
    },
  })
);

export default function BlogPage(props: any) {
  const classes = useStyles();
  const [post, setPost] = useState();
  const [header, setHeader] = useState();
  const { id } = useParams();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    addUser();
    if (props && props.location.state && props.location.state.props) {
      setHeader(props.location.state.props);
      document.title = props.location.state.props.title;
    } else {
      fetch(
        'https://api.github.com/repos/' +
          process.env.REACT_APP_USERNAME +
          '/' +
          process.env.REACT_APP_REPONAME +
          '/contents/index.json'
      )
        .then(res => res.json())
        .then(res => {
          const content = atob(res.content);
          const parsedPosts = JSON.parse(content);
          const test = id && parsedPosts.posts.filter((x: any) => x.id === parseInt(id, 10));
          setHeader({
            ...test[0],
            headerText: `${parsedPosts.author.firstName} ${parsedPosts.author.lastName}`,
          });
        });
    }
  }, []);

  function addUser() {
    fetch(
      'https://api.github.com/repos/' +
        process.env.REACT_APP_USERNAME +
        '/' +
        process.env.REACT_APP_REPONAME +
        '/contents/posts/' +
        id +
        '.md'
    )
      .then(res => res.json())
      .then(res => {
        const content = atob(res.content).replace(/<\!--[^*]*-->/g, '');
        setPost({ ...post, content });
      });
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{header && header.title}</title>
      </Helmet>
      <Header title={header ? header.headerText : ''} />
      <div className={classes.container}>
        <Paper className={classes.paper}>
          {header ? (
            <React.Fragment>
              <Typography variant="h3" component="h3" className={classes.title}>
                {header.title}
              </Typography>
              <Typography component="div">
                <span style={{ paddingRight: '30px' }}>Published: {header.published}</span>
                {header &&
                  header.tags &&
                  header.tags.map((tag: any) => {
                    return <Chip key={tag || 'general'} className={classes.tags} label={tag} />;
                  })}
              </Typography>
              <Divider className={classes.divider} />
              {/* https://stackedit.io/app# */}
              {/* https://rexxars.github.io/react-markdown/ */}
              {post ? <MarkdownRenderer markdown={post.content} /> : <CircularProgress />}
            </React.Fragment>
          ) : (
            <CircularProgress />
          )}
        </Paper>
      </div>
    </React.Fragment>
  );
}
