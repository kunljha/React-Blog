import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
	const [blog, setBlog] = useState({
		title: '',
		author: '',
		body: '',
	})

	const history = useHistory()
	const { title, author, body } = blog

	// handle change event on input
	const handleChange = (e) => {
		setBlog({
			...blog,
			[e.target.name]: e.target.value,
		})
	}

	// handle submit event on form
	const handleSubmit = (e) => {
		e.preventDefault()

		fetch('/blogs', {
			method: POST,
			body: JSON.stringify(blog),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(() => history.push('/'))
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='title'>Blog Title</label>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						onChange={handleChange}
						placeholder='Blog Title..'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='author'>Blog Author</label>
					<input
						type='text'
						name='author'
						id='author'
						value={author}
						onChange={handleChange}
						placeholder='Blog Author..'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='body'>Blog</label>
					<textarea
						name='body'
						id='body'
						value={body}
						onChange={handleChange}
						placeholder='Write Blog..'
						cols='20'
						rows='8'
					></textarea>
				</div>
			</form>
			<input type='submit' value='Create' />
		</div>
	)
}

export default CreateBlog
