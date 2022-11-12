import React from 'react';

import Link from 'next/link';

import { Button } from '../Button';
import { Image } from '../Image';
import { Text } from '../Text';

import { Wrapper, NavLeft, ContainerLogo, NavRight } from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = props => {
  const { title, isLogged, logout, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <NavLeft>
        <ContainerLogo>
          <Image
            src={require('../../assets/logo.svg')}
            width={63}
            height={35}
            alt={''}
          />
        </ContainerLogo>
      </NavLeft>
      <NavRight>
        <Link href={'/'}>
          <Text color="white">Inicio</Text>
        </Link>
        {isLogged && (
          <Link href={'/tickets'}>
            <Text color="white">Meus ingressos</Text>
          </Link>
        )}
        <Button variant="ghost" onClick={logout}>
          <Text color="white">{title}</Text>
        </Button>
      </NavRight>
    </Wrapper>
  );
};

Header.defaultProps = {
  elevation: 2,
};
