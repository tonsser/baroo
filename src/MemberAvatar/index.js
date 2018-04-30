import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../Themes/Media';

const MemberAvatar = styled.div`
  text-align: center;
  cursor: pointer;
`;
const MemberPicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-top: 1em;
  overflow: hidden;
  z-index: 1;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  background: #202020;
  border-color: #717171;
  border-width: 2px;
  border-style: solid;
  img {
    width: 100%;
    transition: transform 0.2s;
    z-index: 0;
    position: relative;
  }
  &:hover img {
    transform: scale(1.2);
  }
  ${media.sm`
    width: 80px;
    height: 80px;
    margin-top: 2em;
  `}
`;

const MemberName = styled.h2`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin: 0;
  > img {
    width: 20px;
    vertical-align: bottom;
  }
  ${media.sm`
    font-size: 16px;
    line-height: 18px;
    > img {
      width: 25px;
    }
  `}
`;

const MemberTitle = styled.p`
  font-weight: 300;
  opacity: 0.6;
  margin: 0;
  font-size: 12px;
  ${media.sm`
    font-size: 14px;
  `}
`;


const MemberAvatarComponent = ({ onClick, image, name, title, teamLogo, ...etc }) => (
  <MemberAvatar onClick={onClick} {...etc}>
    <MemberPicture>
      {image && image.length !== 0 && <img src={image} alt={name} />}
    </MemberPicture>
    {name && name.length !== 0 &&
      <MemberName>{teamLogo && teamLogo.length !== 0 && <img src={teamLogo} />}{name}</MemberName>
    }
    {title && title.length !== 0 && <MemberTitle>{title}</MemberTitle>}
  </MemberAvatar>
);

MemberAvatarComponent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  teamLogo: PropTypes.string,
  onClick: PropTypes.func,
};

MemberAvatarComponent.defaultProps = {
  image: null,
  name: null,
  title: null,
  teamLogo: null,
  onClick: () => {},
};

export default MemberAvatarComponent;
