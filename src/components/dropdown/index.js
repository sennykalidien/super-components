import React from 'react';

const SCIDropdown = (props) => {
    const { items } = props;

    return (
        <select id="blabla" name="item">
            {items.map((item, i) => {
                return (
                    <option key={i} value="item.value">
                        {item.label}
                    </option>
                );
            })}
        </select>
    );
};

export default SCIDropdown;
