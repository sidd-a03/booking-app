const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            {/* Added 'items-start' to ensure columns align at the very top */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 border-b border-gray-500 pb-14">

                {/* Left Side: Logo & Description */}
                {/* Left Side: Logo & Description */}
                <div className="md:max-w-96 flex flex-col items-start">
                    {/* ADDED: '-ml-4' to pull the logo left for visual alignment */}
                    <img
                        alt="Logo"
                        className="w-32 h-auto mb-6 -ml-10"
                        src="/assets/images/logo.png"
                    />
                    <p className="text-sm leading-relaxed text-gray-400">
                        ShowTime is your gateway to the big screen. We simplify movie ticketing so you can focus on the popcorn and the plot. Book your seats today.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded cursor-pointer hover:opacity-80 transition" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded cursor-pointer hover:opacity-80 transition" />
                    </div>
                </div>

                {/* Right Side: Links */}
                {/* Changed 'md:gap-40' to 'md:gap-16' to reduce the massive gap */}
                {/* Removed 'items-start' here as it's redundant on a flex-row, but kept flex structure */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-10 md:mt-0">
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <ul className="text-sm space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">About us</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                        <div className="text-sm space-y-3 text-gray-400">
                            <p>+911234567890</p>
                            <p>achintasiddhanta0304@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-8 text-center text-sm pb-8 text-gray-500">
                Copyright {new Date().getFullYear()} © <a href="https://prebuiltui.com" className="hover:text-white">ShowTime</a>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer