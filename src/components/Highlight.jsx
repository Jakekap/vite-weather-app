import PropTypes from 'prop-types'

export default function Highlight({ children, unit, value, title }) {
	return (
		<div className='row-span-3 flex flex-col items-center justify-center bg-sky-blue text-hueso'>
			<p className='mt-3 xl:mb-2 2xl:mb-5'>{title}</p>
			<p className='font-bold xl:mb-2 xl:text-4xl 2xl:mb-5 2xl:text-6xl'>
				{value}
				<span className='font-normal xl:text-2xl 2xl:text-4xl'>{unit}</span>
			</p>
			{children}
		</div>
	)
}
Highlight.propTypes = {
	children: PropTypes.node,
	unit: PropTypes.string,
	value: PropTypes.string,
	title: PropTypes.string,
}
