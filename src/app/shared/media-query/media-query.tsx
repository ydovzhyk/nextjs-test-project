"use client";

import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../redux/store';
import { setScreenType } from '@/app/redux/technical/technical-slice';

const MediaQuery = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1279px)");
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const mobileListener = (e: MediaQueryListEvent) => {
        if (e.matches) {
            dispatch(setScreenType("isMobile"))
        } else {
            return;
        }
    }
    const tabletListener = (e: MediaQueryListEvent) => {
        if (e.matches) {
            dispatch(setScreenType("isTablet"))
        } else {
            return;
        }
    }
    const desktopListener = (e: MediaQueryListEvent) => {
        if (e.matches) {
            dispatch(setScreenType("isDesktop"))
        } else {
            return;
        }
    }

    mobileQuery.addEventListener('change', mobileListener);
    tabletQuery.addEventListener('change', tabletListener);
    desktopQuery.addEventListener('change', desktopListener);

    // Прибирання слухачів при знищенні компоненту
    return () => {
    mobileQuery.removeEventListener('change', mobileListener);
    tabletQuery.removeEventListener('change', tabletListener);
    desktopQuery.removeEventListener('change', desktopListener);
    };
  }, [dispatch]);

    return null;
};

export default MediaQuery;