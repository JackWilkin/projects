import React from 'react';
import LabeledIcon from './LabeledIcon';

export default function DesktopIcon(props) {
  const {
    label, fill, onClick, icon,
  } = props;
  return (
    <LabeledIcon onClick={onClick} label={label} icon={icon} fill={fill} labelColor="white" />
  );
}
