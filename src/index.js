import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

const Root = styled.View`
    ${({ rootStyle }) => rootStyle};
    position: relative;
    display: flex;
    flex-direction: row;
`;

const Input = styled(TextInput)`
    ${({ inputStyle }) => inputStyle};
    flex: 1;
    ${({ disabled, theme: { colors: { background } } }) => disabled ? '' : `
        background-color: ${background};
    `};
`;

const TouchOverlay = styled.View`
    position: absolute;
    backgroundColor: transparent;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const PickerInput = ({
    onOpenPicker,
    style,
    disabled,
    ...props
}) => (
    <Root rootStyle={style}>
        <Input
            underlineColor='transparent'
            disabled={disabled}
            {...props}
            editable={false}
        />
        {!disabled && (
            <TouchableWithoutFeedback onPress={onOpenPicker}>
                <TouchOverlay />
            </TouchableWithoutFeedback>
        )}
    </Root>
);
