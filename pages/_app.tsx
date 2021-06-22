import '../styles/main.scss';

import {ClayIconSpriteContext} from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayLink, {ClayLinkContext} from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

const spritemap = '/icons.svg';

const NextLink = ({href, ...otherProps}: any) => (
	<Link href={href} passHref>
		<a {...otherProps} />
	</Link>
);

function MyApp({Component, pageProps}) {
	const router = useRouter();

	const currentRoute = router.asPath;

	const title = currentRoute.substr(1);

	const capitalizedTitle = title
		? title.charAt(0).toUpperCase() + title.slice(1)
		: 'Dashboard';

	return (
		<>
			<Head>
				<title>{capitalizedTitle}</title>

				<meta
					name="description"
					content="Liferay automatic code improvement tool"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ClayLinkContext.Provider value={NextLink}>
				<ClayIconSpriteContext.Provider value={spritemap}>
					<header>
						<ClayNavigationBar triggerLabel="Jobs" inverted>
							<ClayLink className="navbar-brand" href="/">
								{'Lug Bot'}
							</ClayLink>
							<ClayNavigationBar.Item
								active={currentRoute === '/jobs'}
							>
								<ClayLink
									href="/jobs"
									className="nav-link"
									displayType="unstyled"
								>
									{'Dashboard'}
								</ClayLink>
							</ClayNavigationBar.Item>
						</ClayNavigationBar>
					</header>

					<main>
						<Component {...pageProps} />
					</main>

					<footer>
						<ClayLayout.ContainerFluid>
							<ClayLayout.Row justify="center">
								<span>
									Created By{' '}
									<ClayLink
										href="https://liferay.com"
										target="__blank"
									>
										Liferay
									</ClayLink>
								</span>
							</ClayLayout.Row>
						</ClayLayout.ContainerFluid>
					</footer>
				</ClayIconSpriteContext.Provider>
			</ClayLinkContext.Provider>
		</>
	);
}

export default MyApp;
