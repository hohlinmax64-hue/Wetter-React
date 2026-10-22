function WeatherCard({ weather }) {
    return (
    <div className="weather-card">

        <div className="weather-header">
        <div>
            <p className="weather-label">CURRENT WEATHER</p>
            <h1 className="weather-city">{weather.name}</h1>
        </div>

        <div className="weather-icon">
            ☁️
        </div>
        </div>

        <div className="weather-main">
        <span className="temperature">
            {Math.round(weather.main?.temp)}°
        </span>

        <div className="weather-description">
            <p>{weather.weather?.[0]?.description}</p>
            <span>
            Feels like {Math.round(weather.main?.feels_like)}°
            </span>
        </div>
        </div>

        <div className="temperature-range">
        <div className="range-item">
            <span>↑ Max</span>
            <strong>{Math.round(weather.main?.temp_max)}°</strong>
        </div>

        <div className="range-item">
            <span>↓ Min</span>
            <strong>{Math.round(weather.main?.temp_min)}°</strong>
        </div>
        </div>

        <div className="weather-details">

        <div className="detail">
            <span className="detail-icon">💧</span>
            <div>
            <span className="detail-label">Humidity</span>
            <strong>{weather.main?.humidity}%</strong>
            </div>
        </div>

        <div className="detail">
            <span className="detail-icon">💨</span>
            <div>
                <span className="detail-label">Wind</span>
                <strong>{weather.wind?.speed} m/s</strong>
            </div>
        </div>

        </div>

    </div>
    )
}

export default WeatherCard