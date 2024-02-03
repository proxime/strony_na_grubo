'use client';

import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import './SelectField.scss';

export type SelectFieldOption = {
    value: string;
    label: string;
};

export interface SelectFieldProps extends SelectProps<SelectFieldOption> {
    error?: string | boolean;
    options: SelectFieldOption[];
}

export const SelectField = React.forwardRef<any, SelectFieldProps>(
    ({ error, options, ...props }: SelectFieldProps, ref) => {
        return (
            <Select
                options={options}
                ref={ref}
                classNamePrefix="select-field"
                className={`select-field__wrapper ${
                    error ? 'select-field__wrapper--error' : ''
                }`}
                components={{
                    IndicatorSeparator: undefined,
                }}
                noOptionsMessage={() => 'Brak wyników'}
                {...props}
            />
        );
    },
);
