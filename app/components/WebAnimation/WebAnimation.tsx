'use client';

import React from 'react';
import { useLottie } from 'lottie-react';
import webAnimation from '@assets/animations/webAnimation.json';

export const WebAnimation = () => {
    const options = {
        animationData: webAnimation,
        loop: true,
        speed: 0.8,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
