import React from 'react';
import CSSModules from 'react-css-modules';

import FormRadioButton from '../FormRadioButton/FormRadioButton';
import SEARCH from '../../constants/searchButtons';
import styles from './TypeButtons.module.scss';

const TypeButtons = (field) => {
    const {typeList} = SEARCH;

    return (
        <div styleName='base'>
            {typeList.map((type, idx) => (
                <FormRadioButton name='type' value={type.value} key={idx} field={field}>
                    {type.name}
                </FormRadioButton>
            ))}
        </div>
    );
};

export default CSSModules(TypeButtons, styles);
