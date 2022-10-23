import React from 'react';
import Button from '../button';

const HeaderMain: React.FC = () => {
    const btnAction = () => {
        {/* TODO btnAction */}
        console.log('btn clicked');
    };

    return (
        <div className="header-main">
            <div className="container">
                <div className="header-main__inner">
                    {/* TODO create burger and menu */}
                    <div className="burger">burger</div>
                    <img src="./logo.svg" alt="logo" className="header-logo" />
                    <Button
                        text="Прайс-лист"
                        action={btnAction}
                        mode="outline"
                        color="gold"
                        size="small"
                        icon="./icons/search.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
