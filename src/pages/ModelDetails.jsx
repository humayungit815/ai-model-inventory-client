import {DatabaseZap, Edit, ShoppingCart, Trash2} from "lucide-react";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";
import Loader from "../components/Loader";

const ModelDetails = () => {
	const {id} = useParams();

	const navigate = useNavigate();

	const {user} = useContext(AuthContext);

	const [model, setModel] = useState([]);

	const [refetch, setRefetch] = useState(false);

	const [loading, setLoading] = useState(true);

	const isOwner = user?.email === model.createdBy;

	useEffect(() => {
		fetch(`http://localhost:3000/models/${id}`)
			.then(res => res.json())
			.then(data => {
				setModel(data);
				setLoading(false);
			});
	}, [id, refetch]);

	const handleDelete = () => {
		fetch(`http://localhost:3000/models/${model._id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				toast.success("Delete Model Successful");
				navigate("/all-model");
			});
	};

	const handlePurchase = () => {
		const purchaseData = {
			modelId: model._id,
			name: model.name,
			framework: model.framework,
			useCase: model.useCase,
			image: model.image,
			createdBy: model.createdBy,
			purchasedBy: user.email,
			purchaseDate: new Date(),
			purchased: model.purchased,
		};

		fetch("http://localhost:3000/purchased", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(purchaseData),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setRefetch(data);
			});
	};

	if (loading) {
		return <Loader></Loader>;
	}

	return (
		<div>
			<div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-800 to-slate-900 text-white flex justify-center items-center p-6">
				<div className="bg-gray-800 border border-gray-700 shadow-xl max-w-3xl w-full rounded-2xl">
					<div className="p-6">
						{/* Image */}
						<div className="flex justify-center mb-6">
							<img
								src={model.image}
								alt={model.name}
								className="w-64 h-64 object-cover rounded-xl shadow-lg"
							/>
						</div>

						{/* Model Info */}
						<h1 className="text-3xl font-bold text-center mb-3">
							{model.name}
						</h1>
						<div className="text-center text-gray-400 mb-6">
							<p>
								Framework: <span className="text-white">{model.framework}</span>
							</p>
							<p>
								Use Case: <span className="text-white">{model.useCase}</span>
							</p>
							<p>
								Dataset: <span className="text-white">{model.dataset}</span>
							</p>
							<p>
								Purchased Count:{" "}
								<span className="text-green-400 font-semibold">
									{model.purchased} times
								</span>
							</p>
						</div>

						{/* Description */}
						<p className="text-gray-300 text-center mb-8 leading-relaxed">
							{model.description}
						</p>

						{/* Buttons */}
						<div className="flex flex-wrap justify-center gap-4">
							<button
								onClick={handlePurchase}
								className="bg-green-600 hover:bg-green-700 flex items-center gap-2 py-2 px-3 rounded-md cursor-pointer"
							>
								<ShoppingCart size={18} /> Purchase Model
							</button>

							{isOwner && (
								<>
									<Link
										to={`/update-model/${model._id}`}
										className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 py-2 px-3 rounded-md cursor-pointer"
									>
										<Edit size={18} /> Edit
									</Link>
									<button
										onClick={handleDelete}
										className="bg-red-600 hover:bg-red-700 flex items-center gap-2 py-2 px-3 rounded-md cursor-pointer"
									>
										<Trash2 size={18} /> Delete
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModelDetails;
