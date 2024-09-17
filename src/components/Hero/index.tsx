import { Button } from '../Btn';
import { Container } from '../Container';

export const Hero = () => {
	return (
		<div className='relative mb-[200px] min-h-[951px] pt-[180px] pb-[200px] before:absolute before:top-0 before:bottom-0 before:h-full before:w-full before:bg-heroClip before:bg-no-repeat before:bg-center before:bg-cover before:z-[5] before:max-w-[1440px] before:left-1/2 before:-translate-x-1/2'>
			<Container cls='relative z-10'>
				<div className='max-w-[600px]'>
					<div className='inline-block px-8 py-3 bg-[#fff]/[0.25] rounded-2xl text-lg text-white font-medium leading-normal'>
						exsplore the world
					</div>
					<h1 className='mb-[30px] text-[3.5rem] font-semibold text-white leading-normal'>
						Explore The Natural Beauty Of Halmahera With Us
					</h1>
					<p className='max-w-[490px] mb-[68px] text-white/[0.50] text-2xl leading-normal'>
						explore the beauty of god's earth in a beautiful forest and have fun
					</p>
					<Button>Explore Now</Button>
				</div>
			</Container>
		</div>
	);
};
