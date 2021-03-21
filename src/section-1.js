import './section-1.css';
import mask from './Mask.png';
import vector from './Vector.png';
import act from './act.png';

const section = () => {
	return (
		<div className="top">
			<div className="row">
				<div className="col">
					<div className="col-1">
						<div className="text-3">
							<div class="sub">Many reasons to get up and start to get back in the business</div>
						</div>
						<div className="text-4">
							The harder you work for something, the greater you’ll feel when you achieve it.
						</div>
						<div className="custom">
							<div className="btn-2 textTT">
								<div className="btnc0">LEARN MORE</div>
							</div>
							<div className="btn-0 textT">
								<div className="btnc0">DEMO</div>
							</div>
						</div>
						<div className="custom-1">
							<div className="co">
								<img src={mask} alt="mask" className="pic" />
							</div>
							<div className="miniflex">
								<div className="d">
									The harder you work for something, the greater you’ll feel when you achieve it.
								</div>
								<div className="e">Watch preview</div>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div>
							<img src={vector} alt="vector" />
						</div>
					</div>
				</div>
			</div>
			<div className="act">
				<img src={act} alt="act" />
			</div>
		</div>
	);
};

export default section;
