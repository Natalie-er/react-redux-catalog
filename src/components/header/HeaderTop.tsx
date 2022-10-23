import React from 'react';

import SocialsList from '../socials/SocialsList';
import LocalizationList from '../localization/Localization';

const HeaderContacts: React.FC = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-top__inner">
                    <div className="header-top__block">
                        <div className="header-contacts">
                            <div className="header-contacts__block">
                                <a
                                    href="tel:+37322838787"
                                    className="header-contacts__phone"
                                >
                                    +(373) 22 83-87-87
                                </a>
                            </div>
                            <div className="header-contacts__block">
                                <SocialsList />
                            </div>
                        </div>
                    </div>
                    <div className="header-top__block">
                        <LocalizationList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContacts;
