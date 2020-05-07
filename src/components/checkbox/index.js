import React from 'react';

const SCICheckbox = (props) => {
    const item = props.items[0];

    const { label, value, name } = item;
    return (
        <div>
            <input
                type="checkbox"
                id={'checkbox-' + name}
                name={name}
                value={value}
            />
            <label for={'checkbox-' + name}>{label}</label>
        </div>
    );
};

export default SCICheckbox;
