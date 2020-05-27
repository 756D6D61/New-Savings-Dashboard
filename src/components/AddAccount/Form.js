import React from 'react'

const AccForm = () => {
	return (
		<div class=" border-gray-400    bg-white rounded-b  p-4 flex flex-col justify-between ">
			<div className="w-full">
				<label className="block">
					<span className="text-gray-700">Account Name Name</span>
					<input
						className="form-input mt-1 block w-full"
						placeholder="Name of Account"
					/>
				</label>

				<div className="block mt-4">
					<span className="text-gray-700">Account Type</span>
					<div className="block mt-2">
						<label className="inline-flex items-center">
							<input
								type="radio"
								className="form-radio"
								name="accountType"
								value="savings"
							/>
							<span className="block ml-2">Savings</span>
						</label>
						<label className="inline-flex items-center ml-6">
							<input
								type="radio"
								className="form-radio"
								name="accountType"
								value="currentAccount"
							/>
							<span className="ml-2">Current Account</span>
						</label>
						<label className="inline-flex items-center ml-6">
							<input
								type="radio"
								className="form-radio"
								name="accountType"
								value="isa"
							/>
							<span className="ml-2">ISA</span>
						</label>
					</div>
				</div>

				<label className="block mt-4">
					<span className="text-gray-700">Category</span>
					<select className="form-select mt-1 block w-full">
						<option>Birthday</option>
						<option>Wedding</option>
						<option>Holiday</option>
						<option>Home</option>
					</select>
				</label>

				<div className="block mt-4">
					<span className="text-gray-700">Budgets</span>
					<div className="mt-2">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-indigo-600"
							/>
							<span className="ml-2">Music</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-green-500"
								checked
							/>
							<span className="ml-2">Phone</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-pink-600"
								checked
							/>
							<span className="ml-2">Health</span>
						</label>

						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-indigo-600"
								checked
							/>
							<span className="ml-2">Shopping</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-green-500"
								checked
							/>
							<span className="ml-2">Security</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-pink-600"
								checked
							/>
							<span className="ml-2">Gaming</span>
						</label>

						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-indigo-600"
								checked
							/>
							<span className="ml-2">Internet</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-green-500"
								checked
							/>
							<span className="ml-2">Home</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								className="form-checkbox text-pink-600"
								checked
							/>
							<span className="ml-2">Misc.</span>
						</label>
					</div>
				</div>
				<div>
					<label className="block mt-4">
						<span className="text-gray-700">Savings Per Month</span>
						<input
							className="form-input mt-1 block w-full"
							placeholder="Enter amount here"
						/>
					</label>
				</div>
				<div>
					<button className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default AccForm
