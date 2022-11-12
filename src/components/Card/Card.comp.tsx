import React from 'react';

import AddLocation from '@material-ui/icons/AddLocation';
import EventNote from '@material-ui/icons/EventNote';

import currency from '../../utils/currency';
import { Image } from '../Image';
import { Text } from '../Text';

import { Body, Wrapper, Title, Description, Row, Col } from './Card.styles';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = props => {
  const {
    title,
    image,
    onSubmit,
    description,
    withoutFooter,
    local,
    date,
    geral,
    onClick,
    totalValue,
    ...rest
  } = props;

  return (
    <Wrapper {...Object.assign({ ...rest })} flexDirection={"column"} onClick={onClick}>
      <Image src={image} alt={'Image Event'} />
      <Body>
        <Title align="left" size={14} weight="bold" height="16">
          {title}
        </Title>
        {description && (
          <Description size={12} align="left" height={16}>
            {description}
          </Description>
        )}
        <Col>
        <Row>
          <EventNote fontSize="small" />
          <Text size={14} align="left" weight="bold">
            {date}
          </Text>
        </Row>
        <Row>
          <AddLocation fontSize="small" />
          <Text size={14} align="left" weight="bold">
            {local}
          </Text>
        </Row>
        </Col>
      </Body>
      {totalValue && (
       <Text size={14} align="left" weight="bold">
       {currency(totalValue)}
      </Text>
      )}
    </Wrapper>
  );
};
