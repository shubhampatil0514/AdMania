import React from 'react';
import { useNavigate } from 'react-router-dom';

function TextAdForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adpage');
  };

  const handleCreateAd = () => {
    navigate('/submit');
  };

  return (
    <div className=" mx-8 my-8 p-4 border-2 rounded">
      <h4 className="text-center mb-4 text-2xl font-semibold">Create Text Ad</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Text Ad Details</h5>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Heading 1
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Heading 1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Heading 2
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Heading 2"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Business Name"
            />
          </div>
        </div>

        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Ad Description</h5>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 p-2 w-full h-32 border rounded-md"
              placeholder="Enter Ad Description"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Button Label
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Button Label"
            />
          </div>
        </div>
      </div>
    
      <div className="px-2">
        <label className="block text-sm font-medium text-gray-700">
          Website URL
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Website URL"
          />
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleBack}
          className="mr-4 bg-blue-500 w-36 text-white font-semibold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={handleCreateAd}
          className="bg-blue-500 text-white w-36 font-semibold py-2 px-4 rounded"
        >
          Create Ad
        </button>
      </div>
    </div>
  );
}

export default TextAdForm;
