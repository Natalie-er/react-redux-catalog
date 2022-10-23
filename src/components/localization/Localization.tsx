import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    getLocalizationList,
    changeLocalization,
} from '../../store/localizationSlice';

import LocalizationItem from './LocalizationItem';
import Icon from '../icon';
import './localization.scss';

const LocalizationList: React.FC = () => {
    const localizationList = useAppSelector((state) => state.localization.list);
    const dispatch = useAppDispatch();

    const changeActiveLocalization = (index: number) => {
        dispatch(changeLocalization(index));
        toggleOpening();
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpening = () => {
        setIsOpen(!isOpen);
    };

    const localizationRefElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dispatch(getLocalizationList());
    }, [dispatch]);

    useEffect(() => {
        const onMissClick = (e: Event) => {
            if (!isOpen) {
                return;
            }
    
            const rootElement = localizationRefElement.current;
            if (rootElement === null) {
                return;
            }
    
            const target = e.target as HTMLElement;
            if (target === rootElement || rootElement.contains(target)) {
                return;
            }
    
            toggleOpening();
        };

        if (isOpen) {
            document.addEventListener('click', onMissClick);
            return () => document.removeEventListener('click', onMissClick);
        }
    }, [isOpen]);

    let activeItem = localizationList.find((item) => item.isActive);
    if (!activeItem) {
        console.error('activeItem is not defined in localizationList');
        return null;
    }

    return (
        <div className="localization" ref={localizationRefElement}>
            <button
                className="localization__btn"
                type="button"
                onClick={toggleOpening}
            >
                <span>{activeItem.name}</span>
                <Icon icon="shevron-down" />
            </button>
            {isOpen && (
                <ul className="localization__list">
                    <LocalizationItem
                        key={activeItem.name}
                        item={activeItem}
                        clickCallback={toggleOpening}
                    />
                    {localizationList.map((item, index) => {
                        if (item.isActive) {
                            return null;
                        }
                        return (
                            <LocalizationItem
                                key={item.name}
                                item={item}
                                clickCallback={() =>
                                    changeActiveLocalization(index)
                                }
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default LocalizationList;
