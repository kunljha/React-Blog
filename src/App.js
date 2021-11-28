import { Fragment } from 'react'
import './App.css'
import Home from './components/layout/Home'
import Navbar from './components/layout/Navbar'

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<Home />
			</div>
		</Fragment>
	)
}

export default App
