import PropTypes from 'prop-types'
import { FiX, FiSearch, FiChevronDown } from 'react-icons/fi'
import Button from './Button'

export default function Navbar({ isActive, handleClick }) {
	return (
		<div
			className={`fixed top-0 left-0 z-10 h-full w-1/3 bg-sky-blue px-10 ${
				isActive ? '-left-1/3 duration-500' : 'left-0 duration-500'
			}`}
		>
			<div className='grid grid-cols-1 grid-rows-5 items-center gap-3'>
				<div className='my-5 flex w-auto justify-end'>
					<FiX
						onClick={handleClick}
						className='cursor-pointer stroke-hueso'
						size={30}
					/>
				</div>
				<form className='relative my-3 flex gap-3 '>
					<input
						placeholder='Search location'
						className='grow border-2 bg-transparent pl-10 pr-5 text-hueso outline-0'
						type='search'
					/>
					<FiSearch
						className='absolute top-1/2 mx-3 -translate-y-1/2 cursor-pointer select-none stroke-gris'
						size={20}
					/>
					<Button className='w-auto px-5' type='secondary'>
						Search
					</Button>
				</form>
				<div className='relative my-3 border-2 border-hueso'>
					<select className='h-16 w-full appearance-none bg-transparent px-5 text-hueso outline-0'>
						<option className='text-black'>London</option>
						<option className='text-black'>Madrid</option>
					</select>
					<FiChevronDown
						className='absolute right-0 top-1/2 z-0 mx-3 -translate-y-1/2 cursor-pointer select-none stroke-hueso'
						size={20}
					/>
				</div>
				<label className=' text-white'>London</label>
				<label className=' text-white'>Long Beach</label>
			</div>
		</div>
	)
}
Navbar.propTypes = {
	isActive: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
}
