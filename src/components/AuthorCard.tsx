import React from 'react';
import './AuthorCard.css';

export default function BlogPage(props: any) {
  return (
    <aside className="profile-card">
      <header>
        <a target="_blank" href="/">
          <img
            src={props.imageUrl || 'http://lorempixel.com/150/150/people/'}
            className="hoverZoomLink"
          />
        </a>
        <h1>{props.firstName + ' ' + props.lastName}</h1>
      </header>

      <div className="profile-bio">
        <p>{props.description}</p>
      </div>

      <ul className="profile-social-links">
        <li>
          <a target="_blank" href={'mailto:' + props.email}>
            <i className="fa fa-envelope" />
          </a>
        </li>
        <li>
          <a target="_blank" href={props.twitter}>
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a target="_blank" href={props.github}>
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a target="_blank" href={props.skype}>
            <i className="fa fa-skype" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
