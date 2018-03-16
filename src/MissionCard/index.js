import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { size } from '../Themes/Fonts';
import ProgressBar from '../ProgressBar';

const Card = styled.div`
  background: black;
  color: #9b9b9b;
  padding: 16px;
  border-radius: 15px;
  cursor: pointer;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 4px;
  margin-top: 0
  font-size: ${size.regular}
`;

const Description = styled.div`
  margin-bottom: ${props => props.hide ? 0 : 20}px;
  overflow: hidden;
  max-height: ${props => props.hide ? 0 : 300}px;
  transition: margin .3s ease, max-height .3s ease;
`;

const Goals = styled.small`

`;


class MissionCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: true };
  }

  componentWillMount() {
    if (this.props.expandable && !this.props.cta) {
      this.setState({expanded: false})
    }
  }

  onCardClick = () => {
    if (this.props.expandable && !this.props.cta) {
      this.setState({expanded: !this.state.expanded})
    }
  }


  render() {
    const { title, description, goals, progress } = this.props;
    const { expanded } = this.state;
    return (
      <Card onClick={this.onCardClick}>
        <Title>{title}</Title>
        {description && <Description hide={!expanded}>{description}</Description>}
        <ProgressBar progress={progress} />
        {goals && <Goals>{goals}</Goals>}
      </Card>
    );
  }
}

MissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  description: PropTypes.string,
  goals: PropTypes.string,
  expandable: PropTypes.bool
};

MissionCard.defaultProps = {
  description: '',
  goals: '',
  expandable: false
};


export default MissionCard;
