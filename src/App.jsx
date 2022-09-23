import Shower from './assets/img/Shower.png'

function App() {
	return (
		<div className='flex'>
			<div className='h-screen w-1/3 bg-sky-blue'>
				<div className='flex w-full h-24 justify-between px-10 items-center'>
					<button className='w-40 h-10 font-raleway font-medium bg-gray-600 text-white'>
						Search for places
					</button>
					<button className='h-10 w-10 bg-gray-600 rounded-full'>+</button>
				</div>
				<div className='bg-clouds-pattern opacity-10 bg-no-repeat bg-cover bg-center h-1/2'>
					<img className='opacity-75' src={Shower} />
				</div>
			</div>
			<div className='h-screen w-2/3 bg-sky-dark'></div>
		</div>
	)
}

export default App
