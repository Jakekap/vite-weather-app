import { useState } from 'react'
import Shower from './assets/img/Shower.png'
import WeatherWeek from './components/WeatherWeek'
import Button from './components/Button'
import PinSvg from './assets/icons/pin'
import PointerSvg from './assets/icons/pointer'
import LocationSvg from './assets/icons/location'
import Highlight from './components/Highlight'
import Navbar from './components/Navbar'

function App() {
	const [navbar, setNavbar] = useState(true)
	const handleClick = () => setNavbar(!navbar)

	return (
		<div className='flex'>
			<div className='flex h-screen w-1/3 flex-col bg-sky-blue'>
				<Navbar isActive={navbar} handleClick={handleClick} />
				<div className='flex h-24 w-full items-center justify-between px-10'>
					<Button onClick={handleClick} type='primary'>
						Search for places
					</Button>
					<Button type='rounded'>
						<LocationSvg className='w-8 fill-hueso' />
					</Button>
				</div>
				<div className=' relative flex h-2/5 w-full items-center justify-center'>
					<img className='absolute h-2/3' src={Shower} />
					<div className='h-full w-full bg-clouds-pattern bg-cover bg-bottom opacity-10'></div>
				</div>
				<div className='flex items-center justify-center'>
					<h1 className='text-center font-raleway text-9xl font-medium text-hueso'>
						15<span className='text-5xl font-normal text-gris'>°C</span>
					</h1>
				</div>
				<div className='flex grow items-center justify-center'>
					<h2 className='text-center font-raleway text-4xl font-bold text-gris'>
						Shower
					</h2>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h3 className=' mb-5 text-center font-normal text-gris'>
						Today · Fri, 5 Jun
					</h3>
					<div className='mb-10 flex'>
						<PinSvg className='mr-1 w-4 fill-gris' />
						<h3 className='text-gris'>Helsinki</h3>
					</div>
				</div>
			</div>
			<div className='md:px-18 relative flex h-screen w-2/3 flex-col bg-sky-dark sm:px-36 lg:px-16'>
				<div className='flex h-28 items-center justify-end gap-3 lg:my-5'>
					<Button darkMode className='font-bold' type='rounded'>
						°C
					</Button>
					<Button className='font-bold' type='rounded'>
						°F
					</Button>
				</div>
				<WeatherWeek />
				<h3 className='mb-10 text-2xl font-bold text-hueso'>
					Today&#39;s Hightlights
				</h3>
				<div className='mb-20 grid h-72 grow grid-cols-2 grid-rows-5 gap-5'>
					<Highlight title='Wind status' value='7' unit='mph'>
						<div className='flex'>
							<div className='mx-3 grid h-7 w-7 place-content-center rounded-full bg-dark-gris'>
								<PointerSvg className='w-3 fill-hueso' />
							</div>
							<p>WSW</p>
						</div>
					</Highlight>
					<Highlight title='Humidity' value='84' unit='%'>
						<div className='flex w-4/5 justify-between text-sm'>
							<p>0</p>
							<p>50</p>
							<p>100</p>
						</div>
						<div className='w-4/5 rounded-full bg-white'>
							<div className='h-2 w-4/5 rounded-full bg-yellow-300'></div>
						</div>
						<p className='flex w-4/5 justify-end text-sm'>%</p>
					</Highlight>
					<Highlight title='Visibility' value='6,4' unit='miles' />
					<Highlight title='Air Pressure' value='998' unit='mb' />
				</div>
				<div className='absolute inset-x-0 bottom-0 m-5 text-center'>
					<p className='text-hueso'>
						create by <b>Christian Andrade</b> - devChallenges.io
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
