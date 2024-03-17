import Button from "../button/Button"

const Register = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Register</h2>
                <form className="mt-4 flex flex-col gap-2">
                    <input type="email" name="email" id="email" placeholder="Email" className="py-2 px-3 rounded-md border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:outline-none dark:bg-[#1F1E24]" />
                    <input type="password" name="password" id="password" placeholder="Password" className="py-2 px-3 rounded-md border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:outline-none dark:bg-[#1F1E24]" />
                    <input type="password" name="password" id="password" placeholder="Repeat Password" className="py-2 px-3 rounded-md border border-gray-300 dark:border-gray-700 focus:border-green-400 focus:outline-none dark:bg-[#1F1E24]" />
                    <Button
                        variant="text"
                        className={`inline-block text-xs w-full text-center text-green-400 hover:bg-green-400 hover:text-white border border-green-400`}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default Register;