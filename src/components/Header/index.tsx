import { Container } from '../Container';

export const Header = () => {
	return (
		<header className='py-4 bg-black'>
			<Container>
				<img src='/logo.svg' alt='logo' />

				<nav></nav>
			</Container>
		</header>
	);
};
