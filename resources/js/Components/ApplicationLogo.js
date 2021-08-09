import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

export default function ApplicationLogo({ size }) {
  return (<FontAwesomeIcon icon={faDocker} size={size} />);
}
