import WeatherCard from './WeatherCard'
import Snow from '../assets/img/Snow.png'

export default function WeatherWeek() {
	return (
		<div className='flex justify-between gap-5 xl:mb-10 2xl:mb-16'>
			<WeatherCard day='Tomorrow' img={Snow} maxTemp='16°C' minTemp='11°C' />
			<WeatherCard day='Sun, 7 Jun' img={Snow} maxTemp='16°C' minTemp='11°C' />
			<WeatherCard day='Mon, 8 Jun' img={Snow} maxTemp='16°C' minTemp='11°C' />
			<WeatherCard day='Tue, 9 Jun' img={Snow} maxTemp='16°C' minTemp='11°C' />
			<WeatherCard day='Wed, 10 Jun' img={Snow} maxTemp='16°C' minTemp='11°C' />
		</div>
	)
}
