import PropTypes from 'prop-types'

const BlogItem = ({ blog }) => {
	return (
		<div className='blog-item'>
			<h4>{blog.title}</h4>
			<p>{blog.author}</p>
		</div>
	)
}

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
}

export default BlogItem
