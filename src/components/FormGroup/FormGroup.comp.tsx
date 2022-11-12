import React, { useMemo } from 'react';

import { Icon2 } from '../Icon2';
import { Text } from '../Text';

import { Row, Help, Wrapper, Label } from './FormGroup.styles';
import { FormGroupProps } from './FormGroup.types';

export const FormGroup: React.FC<FormGroupProps> = props => {
  const { help, label, children, color = 'error', ...rest } = props;

  const renderLabel = useMemo(() => {
    return label && <Label>{label}</Label>;
  }, [label]);

  const renderInput = useMemo(() => {
    return children && <Row>{children}</Row>;
  }, [children]);

  const renderHelp = useMemo(() => {
    return (
      help && (
        <Help>
          <Text size={'12'} align={'left'} color={'#EE4629'} height={14}>
            {help}
          </Text>
        </Help>
      )
    );
  }, [help]);

  return (
    <Wrapper {...rest}>
      {renderLabel}
      {renderInput}
      {renderHelp}
    </Wrapper>
  );
};

export default FormGroup;
