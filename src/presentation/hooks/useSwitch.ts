import React, { useState } from 'react';

const UseSwitch = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };


    return{
        isEnabled,
        toggleSwitch
    };
}

export default UseSwitch;
