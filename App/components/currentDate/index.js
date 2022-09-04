import React from 'react';

export const CurrentDate = () => {
    let today = new Date();
    let date = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()} `;
    return (
        date
    )
}