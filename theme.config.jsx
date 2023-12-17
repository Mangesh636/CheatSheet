import { useRouter } from 'next/router';

export default {
	logo: <span>CheatSheet Hub</span>,

	useNextSeoProps() {
		const { asPath } = useRouter()
		if (asPath !== '/') {
			return {
				titleTemplate: '%s - CheatSheet Hub'
			}
		}
	},

	navigation: {
		prev: true,
		next: true
	},

	footer: {
		text: (
				<div className="flex w-full flex-col items-center sm:items-center">
					<p className="mt-6 text-xs">
						&copy;{' '} {new Date().getFullYear()} {' '}
							<a href="#" target="_blank">Mangesh Bhardwaj</a>
					</p>
				</div>
			)
	},
	toc: {
		backToTop: true
	}
}