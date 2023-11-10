import React, { useState, useEffect } from 'react';

const PaymentReminder = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const now = new Date();
        const dueDateTime = new Date('2022-11-10T21:00:00'); // 10th Nov 2022, 9:00 PM

        if (now > dueDateTime) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Pay Developer</h1>
        </div>
    );
};

export default PaymentReminder;
