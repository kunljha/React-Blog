import { useFetch } from '../../hooks/useFetch'
import BlogList from '../blogs/BlogList'
import Spinner from './Spinner'

const Home = () => {
	const { data: blogs, loading, error } = useFetch('/blogs')

	if (loading) {
		return <Spinner />
	}

	return <div>{!error ? <BlogList blogs={blogs} /> : <p>{error}</p>}</div>
}

export default Home
