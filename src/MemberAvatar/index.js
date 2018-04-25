import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberAvatar = styled.div`
  text-align: center;
  min-height: 345px;
  cursor: pointer;
`;
const MemberPicture = styled.div`
  width: 60%;
  border-radius: 50%;
  mask-image: radial-gradient(circle, #fff, #000);
  display: inline-block;
  margin: 2em 0 1.5em;
  overflow: hidden;
  z-index: 1;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  img {
    width: 100%;
    transition: transform 0.2s;
    z-index: 0;
    position: relative;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

const MemberName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  margin: 0;
`;

const MemberTitle = styled.p`
  font-weight: 300;
  color: rgba(255,255,255,0.6);
  margin: 0;
`;


const MemberAvatarComponent = ({ onClick, image, name, title, ...etc }) => (
  <MemberAvatar onClick={onClick} {...etc}>
    <MemberPicture>
      {image && image.length !== 0 && <img src={image} alt={name} />}
    </MemberPicture>
    {name && name.length !== 0 && <MemberName>{name}</MemberName>}
    {title && title.length !== 0 && <MemberTitle>{title}</MemberTitle>}
  </MemberAvatar>
);

MemberAvatarComponent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

MemberAvatarComponent.defaultProps = {
  image: '',
  name: '',
  title: '',
  onClick: () => {},
};

export default MemberAvatarComponent;
