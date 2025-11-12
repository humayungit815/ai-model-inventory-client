import React from "react";

const Model = ({model}) => {
	return (
		<div>
			
			<div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
				<img
					src={model.image}
					alt={model.name}
					className="w-full h-52 object-cover"
				/>
				<div className="p-5 text-left">
					<div className="flex items-center justify-between mb-2">
						<h3 className="text-xl font-semibold text-gray-800">
							{model.name}
						</h3>
						<span className="text-xs bg-indigo-100 text-indigo-600 font-medium px-3 py-1 rounded-full flex items-center gap-1">
							{model.framework}
						</span>
					</div>
					<p className="text-sm text-gray-600 line-clamp-3">
						{model.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Model;
