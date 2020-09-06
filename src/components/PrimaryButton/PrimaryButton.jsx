import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({children, onClick, withBorder, type, disabled}) => {
    return (
        <button styleName={withBorder ? 'base border' : 'base'} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default CSSModules(PrimaryButton, styles, {allowMultiple: true});
