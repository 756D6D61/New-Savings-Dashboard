import React from 'react'

const NewPage = () => {
	return (
		<>
			<div class="flex w-full">
				<div class="w-1/10 bg-orange-700 text-orange-100 p-5">
					LeftNav
				</div>
				<div class=" w-full bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">Header</h2>
					<div class="flex">
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">
								Budgets
							</h2>
						</div>
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">
								Categories
							</h2>
						</div>
					</div>
					<div class="flex">
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">Graph</h2>
						</div>
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">Table</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full bg-orange-200 text-orange-800 p-5">
				<h2 class="text-orange-700 text-lg mb-5">update</h2>
			</div>
		</>
	)
}

export default NewPage
