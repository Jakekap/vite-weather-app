import PropTypes from 'prop-types'

export default function LocationSvg({ className }) {
	return (
		<svg className={className} viewBox='0 0 24 24'>
			<path d='M12,2 C12.5128358,2 12.9355072,2.38604019 12.9932723,2.88337887 L13,3 L13.0003445,4.31396524 C16.4808766,4.76250386 19.238071,7.51999063 19.6861644,11.0006622 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5128358 21.6139598,12.9355072 21.1166211,12.9932723 L21,13 L19.6860348,13.0003445 C19.2375394,16.480541 16.480541,19.2375394 13.0003445,19.6860348 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4871642,22 11.0644928,21.6139598 11.0067277,21.1166211 L11,21 L11.0006622,19.6861644 C7.51999063,19.238071 4.76250386,16.4808766 4.31396524,13.0003445 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4871642 2.38604019,11.0644928 2.88337887,11.0067277 L3,11 L4.31383558,11.0006622 C4.7619722,7.51965508 7.51965508,4.7619722 11.0006622,4.31383558 L11,3 C11,2.44771525 11.4477153,2 12,2 Z M12,6.25 C8.82436269,6.25 6.25,8.82436269 6.25,12 C6.25,15.1756373 8.82436269,17.75 12,17.75 C15.1756373,17.75 17.75,15.1756373 17.75,12 C17.75,8.82436269 15.1756373,6.25 12,6.25 Z M12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 Z'></path>
		</svg>
	)
}
LocationSvg.propTypes = {
	className: PropTypes.string,
}
