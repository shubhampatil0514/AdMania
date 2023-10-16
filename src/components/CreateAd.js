import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';

function CreateAdPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageSelect = (route) => {
    setSelectedOption(route);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div className="mx-60 mt-8 px-40 border-4 rounded-md">
      <h4 className="text-center mb-4 text-2xl font-semibold">Create Ad</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="border-4  rounded-lg">
          <div className="ml-2 mb-2">
            <button
              onClick={() => handleImageSelect('/text-ad')}
              className={` text-white font-semibold py-2 px-4 rounded ${
                selectedOption === '/text-ad' ? 'bg-blue-500' : 'bg-transparent border border-gray-300'
              }`}
            >
              {selectedOption === '/text-ad' && <BiCheck size={10} />}
            </button>
          </div>
          <div className="border-2 mx-8 my-8 p-2 rounded-lg">
            <img
              src="/images/text_ad1.jpg"
              alt="Text Ad"
              className="max-w-full h-80 mx-auto"
            />
          </div>
          <div className=" bg-slate-300 ">
              <h5 className="text-lg text-center font-semibold">Create</h5>
              <h5 className="text-lg text-center font-semibold">Text Ad</h5>
          </div>
        </div>

        <div className="border-4 rounded-lg ml-4">
          <div className="ml-2 mb-2">
            <button
              onClick={() => handleImageSelect('/media-ad')}
              className={`text-white font-semibold  py-2 px-4 rounded ${
                selectedOption === '/media-ad' ? 'bg-blue-500' : 'bg-transparent border border-gray-300'
              }`}
            >
              {selectedOption === '/media-ad' && <BiCheck size={10} />}
            </button>
          </div>
          <div className="border-2 mx-8 my-8 p-2 rounded-lg">
            <img
              src="/images/media_ad.png"
              alt="Media Ad"
              className="max-w-full h-80 mx-auto"
            />
          </div>
          <div className=" bg-slate-300 ">
              <h5 className="text-lg text-center font-semibold">Create</h5>
              <h5 className="text-lg text-center font-semibold">Media Ad</h5>
          </div>
        </div>
      </div>

      <div className="text-center  mt-4 -pr-40">
        <button
          onClick={handleNext}
          className={`bg-blue-500 text-white w-40 font-semibold py-2 px-4 rounded ${
            selectedOption ? '' : ' pointer-events-none'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateAdPage;
