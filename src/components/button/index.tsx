import React from 'react';
import classNames from 'classnames/bind';

import Icon from '../icon';
import './button.scss';

interface IButton {
    text: string;
    action: () => void;
    mode?: 'default' | 'outline';
    color?: 'default' | 'gold';
    size?: 'default' | 'small';
    icon?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button: React.FC<IButton> = ({
    text,
    action,
    size = 'default',
    mode = 'default',
    color = 'default',
    icon,
    type = 'button',
    disabled = false,
}) => {
    const classes = classNames(
        'btn',
        size !== 'default' && `btn_${size}`,
        mode !== 'default' && `btn_${mode}`,
        color !== 'default' && `btn_${color}`
    );

    return (
        <button
            className={classes}
            type={type}
            onClick={action}
            disabled={disabled}
        >
            {icon && <Icon icon="search" classes="btn__icon" />}
            <span>{text}</span>
        </button>
    );
};

export default Button;
