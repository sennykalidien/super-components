import React from 'react';

import SCICheckbox from '../checkbox';
import SCIRadio from '../radio';
import SCIDropdown from '../dropdown';

const SCIMOAC = (props) => {
    const { items } = props;

    if (items.length === 1) return <SCICheckbox items={items}></SCICheckbox>;
    if (items.length >= 2 && items.length < 5)
        return <SCIRadio items={items}></SCIRadio>;
    if (items.length >= 5) return <SCIDropdown items={items}></SCIDropdown>;
};

export default SCIMOAC;
