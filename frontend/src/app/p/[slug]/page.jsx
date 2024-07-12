"use client";

import { useEffect, useState } from "react";
import { findUser } from "@/fetch/user";
import { findImage, destroyImage, updateImage } from "@/fetch/image";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function ImageDetail({ params }) {
  dayjs.extend(relativeTime);
  const router = useRouter();
  const [user, setUser] = useState();
  const { slug } = params;
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageIdToEdit, setImageIdToEdit] = useState();
  const [imageIdToDelete, setImageIdToDelete] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await findUser();
        if (userData) {
          setUser(userData.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await findImage(slug);
        if (data && data.image) {
          setImage(data.image);
          setTitle(data.image.title);
          setDescription(data.image.description);
        }
      } catch (err) {
        console.error("Error fetching image", err);
      }
    };

    fetchImage();
  }, [slug]);

  const handleConfirmModal = (imageId) => {
    setImageIdToDelete(imageId);
    document.getElementById("deleteImage").showModal();
  };

  const handleDelete = async () => {
    try {
      await destroyImage(imageIdToDelete);
      setImageIdToDelete(null);
      document.getElementById("deleteImage").close();
      router.push("/");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleEditModal = (imageId) => {
    setImageIdToEdit(imageId);
    document.getElementById("editImage").showModal();
  };

  const handleEdit = async () => {
    try {
      const updatedImage = await updateImage(imageIdToEdit, {
        title,
        description,
      });
      setImage((prevImage) => ({
        ...prevImage,
        title,
        description,
      }));
      document.getElementById("editImage").close();
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  return (
    <div className='mx-auto sm:w-full md:w-[48rem] lg:w-[60rem] p-4'>
      {image && (
        <div key={image.id} className='relative'>
          <img
            src={image.url}
            alt={image.title}
            className='w-full h-[20rem] sm:h-[30rem] md:h-[40rem] bg-gray-900 object-contain mb-2 border border-slate-800'
          />
          <h2 className='text-xl sm:text-2xl font-semibold'>{image.title}</h2>
          <p className='font-medium'>
            {image.user.name}
            <span className='pl-2 text-xs font-extralight text-gray-500'>
              {dayjs(image.createdAt).fromNow()}
            </span>
          </p>
          <p>{image.description}</p>

          {user && user.id === image.userId && (
            <div className='absolute top-3 right-3'>
              <button
                onClick={() => handleEditModal(image.id)}
                className='btn btn-ghost btn-sm btn-circle'
              >
                <Pencil color="white" size={18} />
              </button>
              <button
                onClick={() => handleConfirmModal(image.id)}
                className='btn btn-ghost btn-sm btn-circle'
              >
                <Trash2 color='red' size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      <dialog id='deleteImage' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box flex flex-col items-center gap-2'>
          <p>Are you sure you want to delete this image? </p>
          <div className='modal-action justify-center'>
            <button className='btn btn-error w-24' onClick={handleDelete}>
              Confirm
            </button>
            <button
              className='btn w-24'
              onClick={() => document.getElementById("deleteImage").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      <dialog id='editImage' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box flex flex-col items-center gap-2'>
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
          <div className='modal-action justify-center'>
            <button className='btn btn-info w-24' onClick={handleEdit}>
              Save Changes
            </button>
            <button
              className='btn w-24'
              onClick={() => document.getElementById("editImage").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
