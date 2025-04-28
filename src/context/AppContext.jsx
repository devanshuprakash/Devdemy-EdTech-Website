import React, { createContext, useState, useEffect } from 'react';
import { dummyCourses } from '../Assets/assets';  // Assuming dummyCourses is an array

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [allCourses, setAllCourses] = useState([]);

    // Fetch courses on load
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);  // Corrected typo here
    };

    useEffect(() => {
        fetchAllCourses();  // Call to fetch courses
    }, []);

    const value = {
        currency,
        allCourses,
        fetchAllCourses,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
