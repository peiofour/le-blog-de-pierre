import React from 'react'

interface SeoProps {
	title?: string
	description?: string
	image?: string
	keywords?: string[]
	slug?: string
	type?: string
}

const Seo = ({ title, description, image, keywords, slug, type }: SeoProps) => {
	const lastTitle =
		title === undefined
			? 'Le blog de Pierre Fournier'
			: `${title} - Le blog de Pierre Fournier`
	return (
		<>
      <html lang='fr' />
			<title>{lastTitle}</title>
			<meta name='description' content={description} />
			<meta property='og:title' content={lastTitle} />
			<meta
				property='og:url'
				content={`https://www.pierrefournier.dev/${slug}`}
			/>
			<meta property='og:description' content={description} />
			<meta property='og:type' content={type ?? 'website'} />
			<meta property='og:image' content={image} />
			<meta property='og:site_name' content='Le blog de Pierre' />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:creator' content='peiofour' />
			<meta name='twitter:title' content={lastTitle} />
			<meta
				name='twitter:url'
				content={`https://www.pierrefournier.dev/${slug}`}
			/>
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<meta name='keywords' content={keywords?.join(`,`)} />
		</>
	)
}

export default Seo
