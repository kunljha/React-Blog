import './App.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import Navbar from './components/layout/Navbar'
import CreateBlog from './components/blogs/CreateBlog'
import BlogDetails from './components/blogs/BlogDetails'

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/create' component={CreateBlog} />
						<Route exact path='/blogs/:id' component={BlogDetails} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	)
}

export default App
