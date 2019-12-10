import React from 'react'

const AccForm = () => {
	return (
		<div>
			<label class="block">
				<span class="text-gray-700">Account Name Name</span>
				<input
					class="form-input mt-1 block w-full"
					placeholder="Name of Account"
				/>
			</label>

			<div class="mt-4">
				<span class="text-gray-700">Account Type</span>
				<div class="mt-2">
					<label class="inline-flex items-center">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="savings"
						/>
						<span class="ml-2">Savings</span>
					</label>
					<label class="inline-flex items-center ml-6">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="currentAccount"
						/>
						<span class="ml-2">Current Account</span>
					</label>
					<label class="inline-flex items-center ml-6">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="isa"
						/>
						<span class="ml-2">ISA</span>
					</label>
				</div>
			</div>

			<label class="block mt-4">
				<span class="text-gray-700">Category</span>
				<select class="form-select mt-1 block w-full">
					<option>Birthday</option>
					<option>Wedding</option>
					<option>Holiday</option>
					<option>Home</option>
				</select>
			</label>

			<div class="block">
				<span class="text-gray-700">Budgets</span>
				<div class="mt-2">
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-indigo-600"
						/>
						<span class="ml-2">Music</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-green-500"
							checked
						/>
						<span class="ml-2">Phone</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-pink-600"
							checked
						/>
						<span class="ml-2">Health</span>
					</label>

					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-indigo-600"
							checked
						/>
						<span class="ml-2">Shopping</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-green-500"
							checked
						/>
						<span class="ml-2">Security</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-pink-600"
							checked
						/>
						<span class="ml-2">Gaming</span>
					</label>

					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-indigo-600"
							checked
						/>
						<span class="ml-2">Internet</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-green-500"
							checked
						/>
						<span class="ml-2">Home</span>
					</label>
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox text-pink-600"
							checked
						/>
						<span class="ml-2">Misc.</span>
					</label>
				</div>
			</div>
			<div>
				<label class="block">
					<span class="text-gray-700">Savings Per Month</span>
					<input
						class="form-input mt-1 block w-full"
						placeholder="Enter amount here"
					/>
				</label>
			</div>
			<div>
				<button>Save</button>
			</div>
		</div>
	)
}

export default AccForm
