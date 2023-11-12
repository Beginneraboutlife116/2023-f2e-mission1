import images from '../assets/images';

function Header() {
	return (
		<header>
			<div>
				<img
					src={images.logo}
					alt=''
					width='52'
					height='43'
				/>
				<h1>喵立翰 Miao Li-Han</h1>
				{/* Nav */}
				<div>
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
