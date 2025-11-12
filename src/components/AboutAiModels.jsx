import React from "react";

const AboutAiModels = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-6 md:px-20 rounded-xl shadow-md">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-6">About AI Models</h2>
					<p className="text-lg leading-relaxed text-gray-200">
						AI models are the backbone of modern machine learning systems. They
						use{" "}
						<span className="text-blue-400 font-semibold">neural networks</span>{" "}
						to learn patterns from large amounts of data and make intelligent
						predictions or decisions. From
						<span className="text-blue-400 font-semibold"> chatbots</span> that
						understand human language to{" "}
						<span className="text-blue-400 font-semibold">
							image recognition systems
						</span>{" "}
						that identify objects and faces — AI models play a crucial role in
						automation and innovation across industries.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-12">
						<div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition">
							<h3 className="text-2xl font-semibold mb-3 text-blue-300">
								Neural Networks
							</h3>
							<p className="text-gray-200">
								Neural networks mimic the human brain, learning complex patterns
								to power intelligent applications.
							</p>
						</div>

						<div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition">
							<h3 className="text-2xl font-semibold mb-3 text-blue-300">
								Chatbots
							</h3>
							<p className="text-gray-200">
								AI chatbots use NLP (Natural Language Processing) to understand
								and respond to user messages in real time.
							</p>
						</div>

						<div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition">
							<h3 className="text-2xl font-semibold mb-3 text-blue-300">
								Image Recognition
							</h3>
							<p className="text-gray-200">
								Vision-based AI models identify objects, faces, and scenes in
								photos and videos, improving automation and security.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutAiModels;
