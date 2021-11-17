// import React from "react";
// import PropTypes from "prop-types";

// export function SecondsCounter(props) {
// 	return <div>{props.seconds}</div>;
// }

// SecondsCounter.PropTypes = {
// 	seconds: PropTypes.number
// };

import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	const digits = "000000" + props.seconds.toString();
	const counterLine = digits.substr(digits.length - 6).split("");
	let counterDiv = counterLine.map((seconds, i) => (
		<div key={i} className="card">
			<div className="card-body text-white">{seconds}</div>
		</div>
	));

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-body text-white">
							<i className="far fa-clock"></i>
						</div>
					</div>
					{counterDiv}
				</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
