import React, { useEffect, useRef } from "react";
import { toast } from "sonner";
import { getImageSvg } from "../../utility/getImage";

const MAX_IMAGES = 4;

const ImageUpload = ({
  file = [],
  setfile,
  existingImages = [],
  setExistingImages,
  removeImages = [],
  setRemoveImages,
  isEdit = true,
}) => {
  const inputRef = useRef(null);

  const totalCount = existingImages.length + file.length;

  /* ---------------- IMAGE ADD ---------------- */
  const addFiles = (files) => {
    const newFiles = Array.from(files);

    if (totalCount + newFiles.length > MAX_IMAGES) {
      toast.warning("Max 4 images allowed");
      return;
    }

    setfile((prev) => [...prev, ...newFiles]);
  };

  const handleChange = (e) => addFiles(e.target.files);

  const handleDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  /* ---------------- IMAGE REMOVE ---------------- */
  const removeNewImage = (index) => {
    setfile((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (url) => {
    console.log("remv img  ", removeImages);
    
    if (!removeImages.includes(url)) {
      setRemoveImages((prev) => [...prev, url]);
      setExistingImages((prev)=>{
        return prev.filter((item)=>(item != url))
      })
    }
  };

  /* ---------------- CLEAN PREVIEWS ---------------- */
  useEffect(() => {
    return () => {
      file.forEach((f) => URL.revokeObjectURL(f));
    };
  }, [file]);

  /* ---------------- UI ---------------- */
  return (
    <div className="w-full pb-5">
      <h3 className="text-lg font-semibold mb-3">Images</h3>

      {/* UPLOAD BOX */}
      {isEdit && totalCount < MAX_IMAGES && (
        <label
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mb-4 border border-dashed border-gray-400 p-6 rounded-2xl flex flex-col items-center gap-3 cursor-pointer"
        >
          <img
            src={getImageSvg("file-upload")}
            className="size-16 opacity-70"
            alt="upload"
          />
          <p className="text-sm text-gray-500">
            Click or drag & drop (max {MAX_IMAGES})
          </p>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={handleChange}
          />
        </label>
      )}

      {/* EXISTING IMAGES */}
      {existingImages.length > 0 && (
        <div className="flex flex-col gap-3">
          Existing Images :

          <div className="flex flex-wrap gap-3 mb-4">
            {existingImages
              .filter((img) => !removeImages.includes(img))
              .map((img) => (
                <div key={img} className="relative">
                  
                  <img
                    src={img}
                    className="w-20 h-20 object-cover rounded-lg"
                    alt=""
                  />

                  {isEdit && (
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full text-sm"
                      onClick={() => removeExistingImage(img)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* NEW IMAGES */}
      {file.length > 0 && (
        <div  className="flex flex-col gap-3">
           New Images :
          <div className="flex flex-wrap gap-3">
            {file.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  className="w-20 h-20 object-cover rounded-lg border"
                  alt=""
                />

                {isEdit && (
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full text-sm"
                    onClick={() => removeNewImage(i)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
