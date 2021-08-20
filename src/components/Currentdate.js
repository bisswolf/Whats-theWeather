import dateFormat from "dateformat";
import "./Currentdate.css";

function Currentdate() {
	const d = new Date().toLocaleString();
	const y = dateFormat(d, "mmmm dS, yyyy");
	return (
		<div className="text">
			<i>
				<b>{y}</b>
			</i>
		</div>
	);
}
export default Currentdate;
