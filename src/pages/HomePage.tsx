import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import AuthorCard from '../components/AuthorCard';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cards: {
      marginBottom: '20px',
      marginRight: '50px',
      width: '70%',
    },
    container: {
      display: 'flex',
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '100px',
    },
    menu: {
      width: '30%',
    },
  })
);

export default function HomePage() {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
  const [visiblePosts, setVisiblePost] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(0);
  const [authorDetails, setauthorDetails] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
        setPost(parsedPosts.posts);
        setauthorDetails(parsedPosts.author);
        document.title =
          parsedPosts.author.firstName + ' ' + parsedPosts.author.lastName + ' | Personal Blog';

        const temppArray = parsedPosts.posts.filter((x: any) => true);
        const startIndex = currentPage * rowsPerPage;
        const sliced = temppArray.splice(startIndex, rowsPerPage);
        setVisiblePost(sliced);
      });
  }, []);

  // tslint:disable-next-line:no-shadowed-variable
  const updateVisiblePage = (currentPage: any, rowsPerPage: any) => {
    const temppArray = posts.filter((x: any) => true);
    const startIndex = currentPage * rowsPerPage;
    const sliced = temppArray.splice(startIndex, rowsPerPage);
    setVisiblePost(sliced);
  };
  const onPageChange = (event: any, newPage: number) => {
    setcurrentPage(newPage);
    updateVisiblePage(newPage, rowsPerPage);
  };
  const onChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setcurrentPage(0);
    updateVisiblePage(0, parseInt(event.target.value, 10));
  };
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{authorDetails.firstName + ' ' + authorDetails.lastName + ' | Personal Blog'}</title>
      </Helmet>
      <Header title={authorDetails.firstName + ' ' + authorDetails.lastName} />
      <div className={classes.container}>
        <div className={classes.cards}>
          {visiblePosts.map((post: any) => {
            return (
              <ListItem
                key={post.id}
                {...post}
                headerText={authorDetails.firstName + ' ' + authorDetails.lastName}
              />
            );
          })}
          <TablePagination
            component="nav"
            page={currentPage}
            rowsPerPage={rowsPerPage}
            count={posts.length}
            onChangePage={onPageChange}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
        </div>
        <div className={classes.menu}>
          <AuthorCard {...authorDetails} />
        </div>
      </div>
    </React.Fragment>
  );
}
