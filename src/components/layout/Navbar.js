const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container flex'>
				<h1>
					<i className='fab fa-hive'></i> React-Blogs
				</h1>
				<nav>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/create'>Create Blog</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
