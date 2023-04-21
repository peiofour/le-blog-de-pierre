import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export function Head() {
  return (
    <Seo
			title={'Page not found'}
			description={
				"Sorry we couldn't find what you were looking for."
			}
			image={
				'https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg'
			}
			slug={'404'}
			type='website'
			keywords={[]}
		/>
  )
}

const NotFoundPage = () => {
	return (
		<Layout>
			<title>Not found</title>
			<h1>Page not found</h1>
			<p>
				Sorry{' '}
				<span role='img' aria-label='Pensive emoji'>
					😔
				</span>{' '}
				we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === 'development' ? (
					<>
						<br />
						Try creating a page in <code>src/pages/</code>.
						<br />
					</>
				) : null}
				<br />
				<Link to='/'>Go home</Link>.
			</p>
		</Layout>
	)
}

export default NotFoundPage
