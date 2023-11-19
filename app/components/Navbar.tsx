import images from '~/assets/images';

type Navbar = {
	className?: string;
};

function Navbar({ className = '', ...props }: Navbar) {
	return (
		<nav
			className={`mx-auto ${className}`.trim()}
			{...props}>
			<ul className='flex gap-8'>
				<li>
					<a href='#'>候選人主張</a>
				</li>
				<li>
					<a href='#'>最新活動</a>
				</li>
				<li>
					<a href='#'>政策議題</a>
				</li>
				<li>
					<a href='#'>小額捐款</a>
				</li>
				<li>
					<a href='#'>民眾服務信箱</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
