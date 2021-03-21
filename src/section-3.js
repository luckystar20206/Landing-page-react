import './section-3.css';
import frame from './frame.png';

const section = () => {
    return (
		<div className='coll'>
			<div>
				<div className='roww'>
					Create your <span className='sub'>next project</span> with startup framework
				</div>
			</div>
            <div className='roww1'>
                <img src={frame} alt='frame' />
            </div>
		</div>
	);
}

export default section;