import { useState } from 'react'
import BlogList from '../blogs/BlogList'

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: 'Blog One',
			author: 'John Doe',
			body: 'This is blog one body.',
		},
		{
			id: 2,
			title: 'Blog Two',
			author: 'Mike Johnson',
			body: 'This is blog two body.',
		},
		{
			id: 3,
			title: 'Blog Three',
			author: 'Sara Smith',
			body: 'This is blog three body.',
		},
	])

	return (
		<div>
			<BlogList blogs={blogs} />
		</div>
	)
}

export default Home
