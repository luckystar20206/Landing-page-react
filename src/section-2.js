import './section-2.css';
import image from './Image.png';

const section = () => {
	return (
		<div className="row-a">
			<div className="col-a">
				<div className="col-a1">
					<span className="tt">Increase your business</span>
					<span className="tt-1">traffic</span>
				</div>
				<div className="col-a2">
					We are committed to processing the information in order to contact you and talk about your project.
				</div>
				<div className="col-a3">
					<h3 class="ttt">LEARN MORE</h3>
				</div>
			</div>
			<div className="col-b">
				<img src={image} alt="imag" />
			</div>
		</div>
	);
};

export default section;
