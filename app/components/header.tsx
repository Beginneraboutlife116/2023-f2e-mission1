import Navbar from './Navbar';
import images from '../assets/images';

function Header() {
	return (
		<header className='md:px-6 md:py-4 md:bg-theme-1'>
			<div className='flex px-4 py-3 bg-white-85 md:px-6 md:rounded-2xl items-center'>
				<img
					src={images.logo}
					alt=''
					width='52'
					height='43'
					className='mr-2'
				/>
				<p className='text-primary text-xl'>喵立翰 Miao Li-Han</p>
				<Navbar />
				<div className='flex gap-4'>
					{/* max-[768px]:absolute */}
					<img
						src={images.fbIcon}
						alt='facebook'
					/>
					<img
						src={images.igIcon}
						alt='instagram'
					/>
					<img
						src={images.ytIcon}
						alt='youtube'
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
