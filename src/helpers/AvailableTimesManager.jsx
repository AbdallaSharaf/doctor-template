import axiosInstance from './Axios'; // Your Axios instance

// Function to get available dates with times
export const getAvailableDatesWithTimes = () => {
    const availableDatesWithTimes = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2);

    for (let i = 0; i < 8; i++) {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i);

        if (nextDate.getDay() !== 5) { // Exclude Fridays
            // Generate available times for this date
            const times = [
                '09:00 AM',
                '10:00 AM',
                '11:00 AM',
                '01:00 PM',
                '02:00 PM',
                '03:00 PM',
                '04:00 PM',
                '05:00 PM',
                '06:00 PM',
                '07:00 PM',
                '08:00 PM',
            ].map((time) => ({ time, available: true }));

            // Push the date and its available times to the array
            availableDatesWithTimes.push({
                date: nextDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
                times,
            });
        }
    }
    return availableDatesWithTimes;
};

// Function to clear past dates from Firebase
export const clearPastDatesFromFirebase = async () => {
    try {
        const today = new Date(); // Get today's date as a Date object
        const formattedToday = today.toISOString().split('T')[0]; // Format for comparison
        const startDate = new Date(today); // Create a new Date object for startDate
        startDate.setDate(today.getDate() + 2); // Set startDate to two days from today
        const response = await axiosInstance.get('/available_times.json');
        const availableTimes = response.data;

        if (availableTimes) {
            // Loop through the existing dates
            const deleteRequests = Object.keys(availableTimes)
                .filter(date => date < formattedToday) // Filter for past dates
                .map(async (pastDate) => {
                    await axiosInstance.delete(`/available_times/${pastDate}.json`);
                    console.log(`Deleted available times for past date: ${pastDate}`);
                });

            await Promise.all(deleteRequests); // Wait for all delete requests to finish
        }
    } catch (error) {
        console.error('Error clearing past dates from Firebase:', error);
    }
};

// Push available dates and times to Firebase
export const pushAvailableDatesWithTimes = async (datesWithTimes) => {
    try {
        await clearPastDatesFromFirebase();

        const requests = datesWithTimes.map(async ({ date, times }) => {
            await axiosInstance.put(`/available_times/${date}.json`, times);
        });

        await Promise.all(requests); // Wait for all requests to finish
    } catch (error) {
        console.error('Error pushing available times to Firebase:', error);
    }
};

// Function to manage available times
export const manageAvailableTimes = async () => {
    const times = getAvailableDatesWithTimes(); // Get available times
    await pushAvailableDatesWithTimes(times); // Push times to Firebase
};
