'use client';

import React from 'react';
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '@assets/animation.json';

export const WebAnimation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        speed: 0.8,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
