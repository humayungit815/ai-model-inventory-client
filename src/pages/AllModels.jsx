import React, {useEffect, useState} from "react";
import {Link} from "react-router";
import Loader from "../components/Loader";

const AllModels = () => {
	const [models, setModels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedFrameworks, setSelectedFrameworks] = useState([]);

	useEffect(() => {
		fetch("https://ai-model-inventory-manager.vercel.app/models")
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setModels(data);

				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	const fetchModels = async (frameworksArray = []) => {
		setLoading(true);
		try {
			let url = "https://ai-model-inventory-manager.vercel.app/filter";
			if (frameworksArray.length > 0) {
				url += `?frameworks=${encodeURIComponent(frameworksArray.join(","))}`;
			}
			const res = await fetch(url);
			const data = await res.json();
			setModels(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const handleDropdownChange = e => {
		const selectedOptions = Array.from(
			e.target.selectedOptions,
			option => option.value
		);
		setSelectedFrameworks(selectedOptions);
		fetchModels(selectedOptions);
	};

	useEffect(() => {
		fetchModels();
	}, []);

	if (loading) {
		return <Loader></Loader>;
	}

	const handleSearch = e => {
		e.preventDefault();
		const search_text = e.target.search.value;

		fetch(
			`https://ai-model-inventory-manager.vercel.app/search?search=${search_text}`
		)
			.then(res => res.json())
			.then(data => {
				setModels(data);
			});
	};

	return (
		<div>
			<div className="min-h-screen text-white py-10 px-4">
				<h1 className="text-3xl font-bold text-center mb-8 text-base-content">
					All AI Models
				</h1>

				{/*  */}
				<div className="flex justify-between max-w-7xl mx-auto">
					<form
						onSubmit={handleSearch}
						className="flex justify-center mb-8 gap-3"
					>
						<input
							type="text"
							name="search"
							placeholder="Search by model name..."
							className="w-64 px-4 py-2 rounded-md text-base-content focus:outline-none border border-gray-700"
						/>
						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
						>
							Search
						</button>
					</form>

					{/* Filter Dropdown */}
					<div className="flex justify-center mb-6">
						<select
							value={selectedFrameworks[0] || ""}
							onChange={handleDropdownChange}
							className="px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							<option value="">All Frameworks</option>
							<option value="TensorFlow">TensorFlow</option>
							<option value="PyTorch">PyTorch</option>
						</select>
					</div>
				</div>

				{/*  */}

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					{models.length > 0 ? (
						models.map(model => (
							<div
								key={model._id}
								className="bg-base-100 text-base-content rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
							>
								<img
									src={model.image}
									alt={model.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-5 space-y-2 text-base-content">
									<h2 className="text-2xl font-semibold">{model.name}</h2>
									<p className="text-base-content">
										<span className="font-semibold">Framework:</span>{" "}
										{model.framework}
									</p>
									<p className="text-base-content">
										<span className="font-semibold">Use Case:</span>{" "}
										{model.useCase}
									</p>

									<Link to={`/details/${model._id}`}>
										<button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
											View Details
										</button>
									</Link>
								</div>
							</div>
						))
					) : (
						<p className="col-span-full font-medium text-center text-xl text-gray-500 mt-10">
							No models found. Try another search or filter.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default AllModels;
