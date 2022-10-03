import { ButtonType } from './theme'
import PropTypes from 'prop-types'

export default function Button({
	type,
	children,
	darkMode,
	className,
	onClick,
}) {
	const classNames =
		ButtonType[type] +
		' ' +
		(darkMode !== undefined && darkMode
			? 'bg-hueso text-black'
			: 'bg-dark-gris text-hueso') +
		' ' +
		className
	return (
		<button onClick={onClick} className={classNames}>
			{children}
		</button>
	)
}
Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.node,
	darkMode: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.node,
}
