function formatDate(date) {
    return date.toISOString().split('T')[0];
}
 
const now = new Date();
 
const apiUrlDay = 'https://api.open-meteo.com/v1/forecast?' +
    'latitude=52.386718' +
    '&longitude=4.846544' +
    '&daily=sunrise,sunset' +
    '&timezone=Europe%2FBerlin' +
    '&start_date=' + formatDate(now) +
    '&end_date=' + formatDate(now);

async function getData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    const dataDay = await getData(apiUrlDay);
    if (!dataDay) return;
 
    //dayly sunrise and sunset
    const sunrise = dataDay.daily.sunrise[0];
    const sunset = dataDay.daily.sunset[0];
    const simplifiedSunrise = sunrise.split('T')[1]; // from "2025-02-28T06:28" to "06:28"
    const simplifiedSunset = sunset.split('T')[1]; // from "2025-02-28T17:17" to "17:17"
 
    const sunriseH3 = document.getElementById("sunrise");
    const sunsetH3 = document.getElementById("sunset");
 
    sunriseH3.innerHTML = `Sunrise: ${simplifiedSunrise}`;
    sunsetH3.innerHTML = `Sunset: ${simplifiedSunset}`;
}
 
main();