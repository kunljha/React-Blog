import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<Home />
			</div>
		</div>
	)
}

export default App
