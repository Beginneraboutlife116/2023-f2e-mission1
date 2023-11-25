import { twMerge } from 'tailwind-merge';
import images from '~/assets/images';

type Navbar = {
	className?: string;
};

const { activitiesIcon, claimsIcon, donationIcon, policiesIcon, mailIcon } = images;

function Navbar({ className = '', ...props }: Navbar) {
	return (
		<nav
			className={twMerge(
				'mx-auto',
				'max-lg:fixed',
				'max-lg:bottom-0',
				'max-lg:inset-x-0',
				'bg-white-90',
				'border-t',
				'border-solid',
				'border-gray-50',
				className,
			)}
			{...props}>
			<ul className='grid grid-cols-5 gap-8 max-lg:px-2 max-lg:gap-2 max-sm:text-xs max-lg:pt-3 max-lg:pb-4'>
				<li>
					<a
						href='#'
						className='group grid gap-1 justify-center'>
						<img
							className='lg:hidden mx-auto object-contain w-[24px] h-[24px]'
							src={claimsIcon}
							alt='候選人主張'
							width='24px'
							height='24px'
						/>
						<span className='group-hover:text-primary opacity-75'>候選人主張</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='group grid gap-1 justify-center'>
						<img
							className='lg:hidden mx-auto object-contain w-[24px] h-[24px]'
							src={activitiesIcon}
							alt='最新活動'
							width='24px'
							height='24px'
						/>
						<span className='group-hover:text-primary opacity-75'>最新活動</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='group grid gap-1 justify-center'>
						<img
							className='lg:hidden mx-auto object-contain w-[24px] h-[24px]'
							src={policiesIcon}
							alt='政策議題'
							width='24px'
							height='24px'
						/>
						<span className='group-hover:text-primary opacity-75'>政策議題</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='group grid gap-1 justify-center'>
						<img
							className='lg:hidden mx-auto object-contain w-[24px] h-[24px]'
							src={donationIcon}
							alt='小額捐款'
							width='24px'
							height='24px'
						/>
						<span className='group-hover:text-primary opacity-75'>小額捐款</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='group grid gap-1 justify-center'>
						<img
							className='lg:hidden mx-auto object-contain w-[24px] h-[24px]'
							src={mailIcon}
							alt='民眾服務信箱'
							width='24px'
							height='24px'
						/>
						<span className='group-hover:text-primary opacity-75'>民眾服務信箱</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
