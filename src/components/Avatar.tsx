import type {FC} from 'react';
import React from 'react';
import type {ImageStyle, StyleProp} from 'react-native';
import {Image} from 'react-native';
import type {TouchableViewProps} from './TouchableView';
import {TouchableView} from './TouchableView';

export type AvatarProps = TouchableViewProps & {
    uri: string,
    size: number,
    imageStyle?: StyleProp<ImageStyle>
}

export const Avatar: FC<AvatarProps> = ({uri, size, imageStyle, ...touchableViewProps}) => {
    return (
        <TouchableView {...touchableViewProps}>
            <Image source={{uri}}
                style={[imageStyle, {width: size, height: size, borderRadius: size/2}]} />
        </TouchableView>
    )
}
