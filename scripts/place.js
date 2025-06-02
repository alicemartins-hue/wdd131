function calculateWindChill(temp, speed, unit) {
    if (unit === "metric" && temp <= 20 && speed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + " °C";
    } else if (unit === "imperial" && temp <= 50 && speed > 3) {
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(2) + " °F";
    } else {
        return "N/A";
    }
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent.replace(",", "."));
const unit = "metric";

const windChillValue = calculateWindChill(temp, windSpeed, unit);

document.getElementById("windChill").textContent = windChillValue;
