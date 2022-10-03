import PropTypes from 'prop-types'

export default function WeatherCard({ day, img, maxTemp, minTemp }) {
	return (
		<div className='flex w-36 flex-col items-center justify-center bg-sky-blue xl:h-40 2xl:h-48'>
			<p className='mt-4 text-center font-medium text-white'>{day}</p>
			<img className='w-2/3 grow object-contain' src={img} />
			<p className='mb-4 font-medium text-white'>
				{maxTemp}
				<span className='ml-5 text-gris'>{minTemp}</span>
			</p>
		</div>
	)
}
WeatherCard.propTypes = {
	day: PropTypes.string,
	img: PropTypes.any,
	maxTemp: PropTypes.string,
	minTemp: PropTypes.string,
}
