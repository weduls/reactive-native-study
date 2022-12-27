import React, {ComponentProps} from 'react';
import type {FC, ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>
export type TouchableViewProps = TouchableOpacityProps & {
    viewStyle?: StyleProp<ViewStyle>
}

export const TouchableView: FC<TouchableViewProps> = ({children, viewStyle,...touchableProps}) => {
    return (<TouchableOpacity {...touchableProps}>
        <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>)
}
