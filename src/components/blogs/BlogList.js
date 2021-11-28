import PropTypes from 'prop-types'
import BlogItem from './BlogItem'

const BlogList = ({ blogs, title }) => {
	return (
		<div className='blog-list'>
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<BlogItem blog={blog} key={blog.id} />
			))}
		</div>
	)
}

BlogList.defaultProps = {
	title: 'All Blogs',
}

BlogList.propTypes = {
	blogs: PropTypes.array.isRequired,
	title: PropTypes.string,
}

export default BlogList
