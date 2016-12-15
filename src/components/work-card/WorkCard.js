import React, { PropTypes } from 'react';
import './WorkCard.css';

const propTypes = {
  iconAlt: PropTypes.string,
  iconPath: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.node,
  active: PropTypes.string
};

const defaultProps = {
  iconAlt: '',
  iconPath: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22356%22%20height%3D%22280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20356%20280%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15902f929df%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15902f929df%22%3E%3Crect%20width%3D%22356%22%20height%3D%22280%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22131.2890625%22%20y%3D%22148.1%22%3E356x280%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  title: '',
  tags: [],
  description: '',
  active: ''
};

function WorkCard(props) {
  const { iconAlt, iconPath, title, tags, description, active} = props;

  return (
    <div className="card col-md-4 col-sm-12">
      <img
        alt={iconAlt}
        src={iconPath}
        data-holder-rendered="true"
        className="icon"
      />
      <h6>{title}</h6>
      <div className="tag-box">
        {tags.map((tag, i) => <small key={i} className='tag tag-default'>{tag}</small>)}
      </div>
      <p className="card-text">
        {description}
        <small className='alert-danger'>{active}</small>
      </p>
    </div>
  );
}

WorkCard.propTypes = propTypes;
WorkCard.defaultProps = defaultProps;

export default WorkCard;
