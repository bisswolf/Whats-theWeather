import { useState, useEffect } from "react";
import "./Api.css";

function Api() {
	const [city, setCity] = useState(null);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5d899e463ee1c38c0bb727bb82d407e6`;
			const response = await fetch(url);

			const resJson = await response.json();
			console.log(resJson);
			setCity(resJson.main);
		};

		fetchApi();
	}, [search]);

	return (
		<div>
			<input
				placeholder="Search"
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				className="input"
			/>
			<div className="font_type">
				<h3>{search}</h3>
				<div className="texty">
					{!city ? (
						<p>No data found</p>
					) : (
						<div>
							<h3>{city.temp} °C</h3>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Api;
