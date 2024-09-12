import { Container } from '../Container';

export const Header = () => {
	return (
		<header className='py-4 bg-black'>
			<Container>
				<div className='flex items-center justify-between'>
					<img
						className='w-[94px] h-[24px] lg:w-[70px] lg:h-[24px]'
						src='/logo.svg'
						alt='logo'
					/>

					<nav className='lg:fixed z-20 lg:top-0 lg:right-0 lg:w-[320px] lg:bg-gray-800 lg:h-full lg:bottom-0 lg:overflow-y-auto lg:py-20 lg:translate-x-full'>
						<ul className='flex gap-20 lg:flex-col lg:gap-10 lg:items-center'>
							<li>
								<a
									className='relative font-medium text-white before:w-[78%] before:h-1 before:bg-white before:absolute before:top-[calc(100%+2px)] before:rounded-full'
									href='#'>
									Home
								</a>
							</li>
							<li>
								<a className='font-medium text-white' href='#'>
									Services
								</a>
							</li>
							<li>
								<a className='font-medium text-white' href='#'>
									Pricing
								</a>
							</li>
							<li>
								<a className='font-medium text-white' href='#'>
									Contact
								</a>
							</li>
						</ul>
					</nav>

					<div className='flex items-center gap-6'>
						<button className='font-medium text-white hover:text-gray-300 active:text-gray-400'>
							Sign up
						</button>
						<button className='py-3 px-11 font-medium btnGradient text-white bg-btnGradient rounded-full active:scale-[0.98] lg:px-4 lg:py-2 leading-5 lg:rounded-lg'>
							Login
						</button>

						<button className='hidden lg:flex w-6 h-3 flex-col justify-between'>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};
