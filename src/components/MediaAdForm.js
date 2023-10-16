import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMediaAdForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adpage');
  };

  const handleCreateAd = () => {
    navigate('/submit');
  };

  return (
    <div className=" mx-8 my-8 p-4 border-2 rounded">
      <h4 className="text-center mb-4 text-2xl font-semibold">Create Media Ad</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Heading 1
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Heading 1"
            />
          </div>
          <div >
            <label className="block text-sm font-medium text-gray-700">
              Heading 2
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Heading 2"
            />
          </div>
        </div>
        <div className="p-4">
          <div >
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 p-2 w-full h-32 border rounded-md"
              placeholder="Enter Ad Description"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-2 ">
         <div className="mb-4 p-2 w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Landscape Marketing Image
            </label>
            <input
              type="file"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 p-2 w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Portrait Marketing Image
            </label>
            <input
              type="file"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 p-2 w-1/3">
            <label className="block text-sm font-medium text-gray-700">
              Square Marketing Image
            </label>
            <input
              type="file"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
      </div>      
      <div className="px-4">
        <label className="block text-sm font-medium text-gray-700">
          Video URL
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Website URL"
          />
      </div>
      <div className="flex items-center mx-4 mt-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Business Name"
          />
        </div>
        <div className="w-1/2 pl-4">
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
      <div className="px-4 mt-4">
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

export default CreateMediaAdForm;
