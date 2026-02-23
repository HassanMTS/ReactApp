import React from "react";

const Messages = () => (
  <>
    {/* The original Messages.html is a full React app with stateful logic and Tailwind classes. */}
    {/* For strict visual fidelity, you should copy the main structure and classes, but for a real app, port the logic as well. */}
    <div className="bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden">
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden">
        {/* Header and navigation would go here, but the original file uses a React app structure. */}
        {/* For a static JSX conversion, you may want to port the header and a sample message layout. */}
        <header className="bg-white dark:bg-gray-800 shadow-md flex-shrink-0 z-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">DeviceSwap</h1>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-hidden">
          <div className="flex h-full max-h-[calc(100vh-5rem)] m-4 sm:m-6 lg:m-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Sidebar sample */}
            <div className="w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Messages</h2>
              </div>
              <div className="overflow-y-auto flex-1">
                <div className="p-4 flex items-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="relative">
                    <img src="https://picsum.photos/seed/u1/50/50" alt="GadgetGuru88" className="w-12 h-12 rounded-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                  <div className="ml-4 flex-1 overflow-hidden">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-gray-900 dark:text-white truncate">GadgetGuru88</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">10:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm truncate font-bold text-gray-800 dark:text-gray-200">Is the iPhone still available?</p>
                      <span className="ml-2 bg-primary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">1</span>
                    </div>
                  </div>
                </div>
                {/* Add more conversations as needed */}
              </div>
            </div>
            {/* Main chat area sample */}
            <div className="w-full md:w-2/3 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center bg-gray-50 dark:bg-gray-800">
                <img src="https://picsum.photos/seed/u1/50/50" alt="GadgetGuru88" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">GadgetGuru88</h3>
                  <p className="text-xs text-green-500 font-medium">Online</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-800">
                <div className="flex justify-start">
                  <div className="max-w-[75%] px-4 py-2 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                    <p>Hi, I saw your listing for the iPhone 12.</p>
                    <p className="text-xs mt-1 text-right text-gray-500 dark:text-gray-400">10:00 AM</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[75%] px-4 py-2 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                    <p>Is the iPhone still available?</p>
                    <p className="text-xs mt-1 text-right text-gray-500 dark:text-gray-400">10:30 AM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[75%] px-4 py-2 rounded-lg shadow-sm bg-primary-600 text-white rounded-br-none">
                    <p>Yes, it's still available!</p>
                    <p className="text-xs mt-1 text-right text-primary-200">10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
);

export default Messages;
