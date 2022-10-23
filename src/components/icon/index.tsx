import React from 'react';
import classNames from 'classnames/bind';

import './icon.scss';

interface IIcon {
    icon: string;
    classes?: string;
}

const Icon: React.FC<IIcon> = ({ icon, classes }) => {
    const iconClasses = classNames('icon', classes);
    const href = `./sprite.svg#icon-${icon}`;

    return (
        <svg className={iconClasses} aria-hidden="true" focusable="false">
            <use xlinkHref={href}></use>
        </svg>
    );
};

export default Icon;
