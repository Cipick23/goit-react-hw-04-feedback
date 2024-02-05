import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Section = ({ title, children }) => {
  return (
    <Card
      style={{
        width: '25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#c2bdbd',
        fontSize: '40',
        margin: '10px',
      }}
    >
      <h2>{title}</h2>
      {children}
    </Card>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
