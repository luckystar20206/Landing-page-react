import './navbar.css';
import logo from './logo.png';

const navbar = () => {
	return (
		<div className="header">
			<div className="subhead">
				<div class="subhead-0">
					<div>
						<img src={logo} alt="logo" />
					</div>

					<div className="text">
						<div className="text-c">ABOUT</div>
						<div className="text-c">GALLERY</div>
						<div className="text-c">PRICING</div>
						<div className="text-c">FAQ</div>
						<div className='text-c'>BENEFITS</div>
					</div>
				</div>

				<div class='subhead-1'>
					<div className="btn text-1">
						<div className="btnc">SIGN IN</div>
					</div>
					<div className="btn-1 text-2">
						<div className="btnc">SIGN UP</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default navbar;
