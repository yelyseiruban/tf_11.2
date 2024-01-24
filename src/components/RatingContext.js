import { createContext, useContext, useState, ReactNode } from 'react';

const RatingContext = createContext(undefined);

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState({});

    const updateRating = (mealId, newRating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [mealId]: newRating,
        }));
    };

    const contextValue = {
        ratings,
        updateRating,
    };

    return (
        <RatingContext.Provider value={contextValue}>
            {children}
        </RatingContext.Provider>
    );
};

export const useRating = () => {
    const context = useContext(RatingContext);
    if (!context) {
        throw new Error('useRating must be used within a RatingProvider');
    }
    return context;
};