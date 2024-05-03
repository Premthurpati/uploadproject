import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="uploadInput" className="text-lg font-medium">
              Upload New Image
            </label>
            <input
              type="file"
              id="uploadInput"
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Upload
          </button>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-medium">Remove Existing Image</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Remove
            </button>
          </div>
        </div>
        <div className="mt-8">
          <button className="text-lg text-gray-700 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
