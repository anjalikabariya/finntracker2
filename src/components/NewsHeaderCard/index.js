import React from 'react';
import './styles.scss';
import dateFormat from '../../utils/dateFormat';

function NewsHeaderCard ({href, title, author, date, thumbnail, tags}) {
    return(
      <a href={href}>
	      <div className="card card--float">
			<div className="news--card">
				<div className="news--image-container">
					<img src={thumbnail} className="news--image" ></img>
				</div>
				<div className="news--content flex--column">
					<div className="news--author">{author}</div>
					<div className="news--title">{title}</div>
					<div className="news--tags">{tags}</div>
				</div>
			</div>
	      </div>
      </a> 
    );
}
export default NewsHeaderCard;
