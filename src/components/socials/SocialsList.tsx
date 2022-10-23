import React from 'react';

import SocialsItem from './SocialsItem';
import './socials.scss';

const socialsList = [
    {
        title: 'instagram',
        link: '#instagram',
        icon: 'instagram',
    },
    {
        title: 'faceboook',
        link: '#faceboook',
        icon: 'facebook',
    },
    {
        title: 'viber',
        link: '#viber',
        icon: 'viber',
    },
    {
        title: 'whatsapp',
        link: '#whatsapp',
        icon: 'whatsapp',
    },
];

const SocialsList: React.FC = () => {
    return (
        <ul className="socials">
            {socialsList.map((item) => (
                <SocialsItem key={item.title} item={item} />
            ))}
        </ul>
    );
};

export default SocialsList;
