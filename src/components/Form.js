import React from 'react'

const AccForm = () => {
	return (
		<div>
			<form class="w-full max-w-sm">
				<div class="flex items-center border-b border-b-2 border-teal-500 py-2">
					<input
						class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Jane Doe"
						aria-label="Full name"
					/>
					<button
						class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
						type="button"
					>
						Sign Up
					</button>
					<button
						class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
						type="button"
					>
						Cancel
					</button>
				</div>
			</form>
			<div class="block">
				<span class="text-gray-700">Checkboxes</span>
				<div class="mt-2">
					<div>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-indigo-600"
								checked
							/>
							<span class="ml-2">Option 1</span>
						</label>
					</div>
					<div>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-green-500"
								checked
							/>
							<span class="ml-2">Option 2</span>
						</label>
					</div>
					<div>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-pink-600"
								checked
							/>
							<span class="ml-2">Option 3</span>
						</label>
					</div>
				</div>
			</div>
			<label class="block">
				<span class="text-gray-700">Name</span>
				<input
					class="form-input mt-1 block w-full"
					placeholder="Jane Doe"
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
							value="personal"
						/>
						<span class="ml-2">Personal</span>
					</label>
					<label class="inline-flex items-center ml-6">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="busines"
						/>
						<span class="ml-2">Business</span>
					</label>
				</div>
			</div>

			<label class="block mt-4">
				<span class="text-gray-700">Requested Limit</span>
				<select class="form-select mt-1 block w-full">
					<option>$1,000</option>
					<option>$5,000</option>
					<option>$10,000</option>
					<option>$25,000</option>
				</select>
			</label>

			<div class="flex mt-6">
				<label class="flex items-center">
					<input type="checkbox" class="form-checkbox" />
					<span class="ml-2">
						I agree to the{' '}
						<span class="underline">privacy policy</span>
					</span>
				</label>
			</div>
		</div>
	)
}

export default AccForm
