import React from 'react';

import Icon from '../icon';

interface ISocialsItem {
    title: string;
    link: string;
    icon: string;
}

interface ISocialsItemProps {
    item: ISocialsItem;
}

const SocialsItem: React.FC<ISocialsItemProps> = ({ item }) => {
    const { link, icon, title } = item;

    return (
        <li className="socials__item">
            <a href={link} title={title} target="_blank" rel="noreferrer">
                <Icon icon={icon} />
            </a>
        </li>
    );
};

export default SocialsItem;
