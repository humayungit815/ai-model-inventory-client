import React from "react";
import {useLoaderData, useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";

const UpdateModel = () => {
	const data = useLoaderData();


	const navigate = useNavigate();
	const {id} = useParams();

	const handleUpdateModel = e => {
		e.preventDefault();

		const formData = {
			name: e.target.name.value,
			framework: e.target.framework.value,
			useCase: e.target.useCase.value,
			dataset: e.target.dataset.value,
			description: e.target.description.value,
			image: e.target.image.value,
		};
		console.log(formData);

		fetch(`http://localhost:3000/update-model/${data._id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				toast.success("Update Successfully!");
				navigate(`/details/${id}`);
			});
	};

	return (
		<div>
			<div className="max-w-2xl mx-auto bg-gray-900 text-white p-8 rounded-2xl shadow-lg mt-10">
				<h2 className="text-2xl font-bold mb-6 text-center">Update AI Model</h2>

				<form onSubmit={handleUpdateModel} className="space-y-4">
					{/* Model Name */}
					<div>
						<label className="block mb-1 font-semibold">Model Name</label>
						<input
							type="text"
							name="name"
							defaultValue={data.name}
							required
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter Name"
						/>
					</div>

					{/* Framework */}
					<div>
						<label className="block mb-1 font-semibold">Framework</label>
						<input
							type="text"
							name="framework"
							defaultValue={data.framework}
							required
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter Framework"
						/>
					</div>

					{/* Use Case */}
					<div>
						<label className="block mb-1 font-semibold">Use Case</label>
						<input
							type="text"
							name="useCase"
							defaultValue={data.useCase}
							required
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="UseCase"
						/>
					</div>

					{/* Dataset */}
					<div>
						<label className="block mb-1 font-semibold">Dataset</label>
						<input
							type="text"
							name="dataset"
							defaultValue={data.dataset}
							required
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter Dataset"
						/>
					</div>

					{/* Description */}
					<div>
						<label className="block mb-1 font-semibold">Description</label>
						<textarea
							name="description"
							defaultValue={data.description}
							required
							rows="4"
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Write a short description about this model..."
						></textarea>
					</div>

					{/* Image URL */}
					<div>
						<label className="block mb-1 font-semibold">Image (URL)</label>
						<input
							type="url"
							name="image"
							defaultValue={data.image}
							className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="https://example.com/image.jpg"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
					>
						Update Model
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateModel;
