import React, { useMemo } from 'react';

import { Icon2 } from '../Icon2';
import { Image } from '../Image';
import { Paper } from '../Paper';
import { Text } from '../Text';

import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = props => {
  const {
    size,
    icon,
    text,
    image,
    children,
    fontColor = 'white',
    ...rest
  } = props;

  const renderChildren = useMemo(() => {
    return icon ? (
      <Icon2 name={icon} color={fontColor} />
    ) : text ? (
      <Text color={fontColor} weight="600">
        {text}
      </Text>
    ) : image ? (
      <Image src={image} alt="avatar" layout="fill" />
    ) : (
      children
    );
  }, [icon, text, image, children, fontColor]);

  return (
    <Paper {...rest} size={size}>
      {renderChildren}
    </Paper>
  );
};

Avatar.defaultProps = {
  size: 40,
  circle: true,
  center: true,
  elevation: 0,
  color: 'neutral4',
};
