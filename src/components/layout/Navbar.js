import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container flex'>
				<Link to='/'>
					<h1>
						<i className='fab fa-hive'></i> React-Blogs
					</h1>
				</Link>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/create'>Create Blog</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
