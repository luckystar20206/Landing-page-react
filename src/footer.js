import './footer.css';
import social from './Social.png';

const footer = () => {
	return (
		<div className="footer">
			<div className="flexrow">
				<div className="r1">
					<div>ARShakir</div>
				</div>
				<div className="r2">
					<img src={social} alt="social" />
				</div>
			</div>

			<div className="grid">
				<div className="g1">
					<div className='c'>First</div>
					<div>First Page</div>
					<div>Second Page</div>
					<div>Third Page</div>
					<div>Fourth Page</div>
				</div>
				<div className="g2">
					<div className='c'>Second</div>
					<div>First Page</div>
					<div>Second Page</div>
					<div>Third Page</div>
					<div>Fourth Page</div>
				</div>
				<div className="g3">
					<div className='c'>Third</div>
					<div >First Page</div>
					<div>Second Page</div>
					<div>Third Page</div>
					<div>Fourth Page</div>
				</div>
				<div className="g4">
					<div className='c'>Fourth</div>
					<div>First Page</div>
					<div>Second Page</div>
					<div>Third Page</div>
					<div>Fourth Page</div>
				</div>
			</div>

			<div className="rowww">
				<div className='w1'>© Copyrights 2021</div>
				<div className='w2'>Privacy policy</div>
                <div className='w3'>Terms of service</div>
			</div>
		</div>
	);
};

export default footer;
