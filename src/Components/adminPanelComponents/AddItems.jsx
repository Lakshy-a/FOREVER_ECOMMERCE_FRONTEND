import React, { useState } from "react";
import { useForm } from "react-hook-form";
import upload_area from "../../assets/admin_assets/upload_area.png";
import { useDispatch } from "react-redux";
import { addproduct } from "../../slices/productsData/productsSlice";

// Helper function to generate random alphabetic ID
const generateRandomId = (length = 6) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const AddItems = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm(); // Access reset from useForm
  const sizeArray = ["S", "M", "L", "XL", "XXL"];
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);
  const [image, setImages] = useState([]); // Array to store the image files

  const handleSizeSelected = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      // Update image array with the new file
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file; // Add or replace the file at the correct index
        return updatedImages;
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedPreviews = [...imagePreviews];
        updatedPreviews[index] = reader.result; // Update the image preview
        setImagePreviews(updatedPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const _id = generateRandomId();
    const date = new Date().toISOString().split("T")[0];

    // Add images array to the form data
    const formData = {
      ...data,
      sizes: selectedSizes,
      quantity: 1,
      _id,
      date,
      image,
    };

    console.log(formData); // Log the form data with images
    dispatch(addproduct(formData));

    // Reset form after submission
    reset(); // This will reset all the form fields
    setSelectedSizes([]); // Clear selected sizes
    setImagePreviews([null, null, null, null]); // Reset image previews
    setImages([]); // Reset image files
  };

  return (
    <>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="mb-10 px-8 xs:px-20 mt-8"
      >
        <div>
          <label className="text-gray-500 font-medium">Upload Images</label>
          <div className="mt-2 flex gap-2 xs:gap-8">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <label htmlFor={`file-input-${index}`}>
                  {imagePreviews[index] ? (
                    <img
                      src={imagePreviews[index]}
                      alt={`Preview ${index + 1}`}
                      className="w-16 xs:w-20 cursor-pointer object-cover"
                    />
                  ) : (
                    <img
                      src={upload_area}
                      alt="Upload placeholder"
                      className="w-16 xs:w-20 cursor-pointer"
                    />
                  )}
                </label>
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(index, e)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Other form fields */}
        <div className="mt-4 flex flex-col">
          <label htmlFor="productName" className="text-gray-500 font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Type here"
            className="xs:w-[500px] px-2 border border-black mt-2 py-1 w-full rounded-md outline-pink-300"
            {...register("name", { required: true })}
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label
            htmlFor="productDescription"
            className="text-gray-500 font-medium"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            placeholder="Write content here"
            className="xs:w-[500px] px-2 border border-black mt-2 py-1 w-full outline-pink-300 rounded-md"
            {...register("description", { required: true })}
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label className="text-gray-500 font-medium">Product Category</label>
          <select
            className="xs:w-[500px] mt-2 px-2 py-1 border border-black rounded-md outline-pink-300"
            {...register("category", { required: true })}
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>

        <div className="mt-4 flex flex-col">
          <label className="text-gray-500 font-medium">Sub Category</label>
          <select
            className="xs:w-[500px] mt-2 border border-black px-2 py-1 rounded-md outline-pink-300"
            {...register("subCategory", { required: true })}
          >
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>
          </select>
        </div>

        <div className="mt-4 flex flex-col">
          <label className="text-gray-500 font-medium" htmlFor="productPrice">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            placeholder="25"
            className="xs:w-[500px] border border-black w-full px-2 py-1 mt-2 rounded-md outline-pink-300"
            {...register("price", { required: true })}
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-500 font-medium" htmlFor="sizes">
            Product Sizes
          </label>
          <div id="sizes" className="flex gap-4 mt-2">
            {sizeArray.map((size) => (
              <div
                key={size}
                className={`${
                  selectedSizes.includes(size) ? "bg-pink-200" : "bg-gray-300"
                } px-2 py-1 cursor-pointer`}
                onClick={() => handleSizeSelected(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <input type="checkbox" id="bestseller" {...register("bestseller")} />
          <label
            className="text-gray-500 font-medium ml-4"
            htmlFor="bestseller"
          >
            Add to Bestseller
          </label>
        </div>

        <div className="mt-4">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-black text-white px-10 py-2 hover:bg-white hover:text-black hover:border border-black"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItems;
