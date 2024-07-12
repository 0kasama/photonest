"use client";

import { useState } from "react";
import { createImage } from "@/fetch/image";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const data = await createImage(formData);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mt-10 flex flex-col justify-center items-center gap-5'>
      <h1 className='text-3xl font-bold'>Add New Image</h1>
      <form
        className='flex flex-col gap-5 w-full max-w-xs'
        onSubmit={handleSubmit}
      >
        <label className='form-control'>
          <span className='label-text text-lg font-medium'>Title</span>
          <input
            type='text'
            placeholder='Enter Image Title'
            value={title}
            onChange={handleTitleChange}
            className='input input-info'
          />
        </label>

        <label className='form-control'>
          <span className='label-text text-lg font-medium'>Description</span>
          <input
            type='text'
            placeholder='Enter Image Description'
            value={description}
            onChange={handleDescriptionChange}
            className='input input-info'
          />
        </label>

        <label className='form-control'>
          <span className='label-text text-lg font-medium'>Image</span>
          <input
            type='file'
            onChange={handleImageChange}
            className='file-input file-input-bordered file-input-info'
          />
        </label>

        <div className='flex justify-center gap-5 mt-5'>
          <button type='submit' className='btn btn-primary w-1/2'>
            Post New Image
          </button>

          <button
            type='button'
            onClick={handleCancel}
            className='btn btn-neutral w-1/2'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
