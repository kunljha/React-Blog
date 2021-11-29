const CreateBlog = () => {
	return (
		<div>
			<form>
				<div className='form-control'>
					<label htmlFor='title'>Blog Title</label>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Blog Title..'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='author'>Blog Author</label>
					<input
						type='text'
						name='author'
						id='author'
						placeholder='Blog Author..'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='body'>Blog</label>
					<textarea
						name='body'
						id='body'
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
