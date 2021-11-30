import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<h2>OOPS...</h2>
			<h4>The page you're looking does not exists!</h4>
			<Link to='/'>Back Home..</Link>
		</div>
	)
}

export default NotFound
