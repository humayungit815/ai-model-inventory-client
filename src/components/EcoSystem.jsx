import React from 'react';
import Marquee from 'react-fast-marquee';

const EcoSystem = () => {
    return (
			<div>
				<section className="py-10 dark:bg-slate-900/20">
					<div className="max-w-7xl mx-auto px-6 text-center">
						<h3 className="text-slate-400 text-[15px] font-black uppercase tracking-[0.5em] mb-12">
							Seamlessly Integrated With
						</h3>
						<div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
							<Marquee>
								<span className="text-2xl font-black dark:text-white">
									PYTORCH
								</span>
								<span className="text-2xl font-black dark:text-white mx-10">
									TENSORFLOW
								</span>
								<span className="text-2xl font-black dark:text-white">
									HUGGINGFACE
								</span>
								<span className="text-2xl font-black dark:text-white mx-10">
									AWS BOTO3
								</span>
							</Marquee>
						</div>
					</div>
				</section>
			</div>
		);
};

export default EcoSystem;