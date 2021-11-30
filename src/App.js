import './App.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/layout/Home'
import Navbar from './components/layout/Navbar'
import CreateBlog from './components/blogs/CreateBlog'
import BlogDetails from './components/blogs/BlogDetails'
import NotFound from './components/layout/NotFound'

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/create' element={<CreateBlog />} />
						<Route path='/blogs/:id' element={<BlogDetails />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Fragment>
		</Router>
	)
}

export default App
