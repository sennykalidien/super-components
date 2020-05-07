import React from 'react';

const SCIRadio = (props) => {
    const { items } = props;

    return (
        // map, filter, reduce
        <div>
            {items.map((radio, i) => {
                return (
                    <div key={i}>
                        <input
                            type="radio"
                            id={'radio-' + radio.name + i}
                            name={'radio-' + radio.name}
                            value={radio.value}
                            {radio.DefaultOrNot}
                        />
                        <label for={'radio-' + radio.name + i}>
                            {radio.label}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default SCIRadio;
