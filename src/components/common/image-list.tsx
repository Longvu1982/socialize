import { uploadImage } from "@/service/file";
import { ImgurFileResponse } from "@/service/model";
import { FileContent } from "node_modules/use-file-picker/dist/interfaces";
import { forwardRef, useImperativeHandle } from "react";
import { useImperativeFilePicker } from "use-file-picker";
import { FileAmountLimitValidator, FileSizeValidator, FileTypeValidator } from "use-file-picker/validators";

export type ImageRefType = {
  openFilePicker: () => void;
  removeFileByIndex: (index: number) => void;
  removeFileByReference: (file: File) => void;
  clear: () => void;
  manualUpload: () => Promise<ImgurFileResponse[]>;
  plainFiles: File[];
  filesContent: FileContent<string>[];
};

const ImageList = forwardRef<ImageRefType, A>((_props, ref) => {
  const { openFilePicker, filesContent, clear, removeFileByIndex, removeFileByReference, plainFiles } = useImperativeFilePicker({
    readAs: "DataURL",
    accept: "image/*,video/*",
    multiple: true,
    validators: [
      new FileAmountLimitValidator({ max: 10 }),
      new FileTypeValidator(["jpg", "png", "mp4"]),
      new FileSizeValidator({ maxFileSize: 10 * 1024 * 1024 }),
    ],
  });

  const manualUpload = async () => {
    const uploadFuncs = plainFiles.map((file) => {
      console.log(file);
      return async () => {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uploadImage(formData);
        return data;
      };
    });

    return await Promise.all(uploadFuncs.map((func) => func()));
  };

  useImperativeHandle(ref, () => {
    return {
      openFilePicker,
      removeFileByIndex,
      removeFileByReference,
      clear,
      manualUpload,
      filesContent,
      plainFiles,
    };
  });

  return (
    <div className="grid grid-cols-3 gap-2">
      {filesContent.map((file, index) => (
        <div key={index} className="aspect-square border-2 rounded-md overflow-hidden">
          <img alt={file.name} src={file.content} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
});

ImageList.displayName = "ImageList";

export default ImageList;
