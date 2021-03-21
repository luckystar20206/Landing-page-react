import { isVariableDeclaration } from 'typescript';
import './section-4.css';

const section = () => {
	return (
		<div className="parent">
			<div className="subparent">
				<div className="sp-1">There are many reasons to get down</div>
				<div className="sp-2">
					There are many reasons to get down and start to get depressed about your situation.{' '}
				</div>
				<div className="subrow">
					<div className="sb-1">
						<div className='sbb'>Your Email</div>
					</div>
					<div className="sb-2">
                        <div className='sbb-1'>SEND</div>
					</div>
				</div>
				<div className="sp-3">No spam. Only releases, updates and discounts</div>
			</div>
		</div>
	);
};

export default section;
