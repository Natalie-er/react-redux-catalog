import React from 'react';

interface ILocalizationItem {
    name: string;
    isActive: boolean;
}

interface ILocalizationItemProps {
    item: ILocalizationItem;
    clickCallback: () => void;
}

const LocalizationItem: React.FC<ILocalizationItemProps> = ({
    item,
    clickCallback,
}) => {
    const { name } = item;

    return (
        <li className="localization__item" key={name}>
            <button
                className="localization__item-content"
                type="button"
                onClick={clickCallback}
            >
                {name}
            </button>
        </li>
    );
};

export default LocalizationItem;
