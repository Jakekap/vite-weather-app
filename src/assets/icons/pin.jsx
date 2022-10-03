import PropTypes from 'prop-types'

export default function PinSvg({ className }) {
	return (
		<svg className={className} viewBox='0 0 492.45 492.45'>
			<path d='m246.18 0c-119.09 0-186.65 102.68-161.46 211.82 17.938 77.722 126.26 280.63 161.46 280.63 32.892 0 143.24-202.98 161.46-280.63 25.351-108.08-41.68-211.82-161.46-211.82zm0.051 224.97c-34.38 0-62.244-27.863-62.244-62.244s27.864-62.244 62.244-62.244 62.244 27.863 62.244 62.244-27.864 62.244-62.244 62.244z' />
		</svg>
	)
}
PinSvg.propTypes = {
	className: PropTypes.string,
}
