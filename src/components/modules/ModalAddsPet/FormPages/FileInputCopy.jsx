import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { TfiPlus } from 'react-icons/tfi';

import {
  InputFile,
  LabelFile,
  InputFileWrap,
  PreviewPhoto,
  DivImg,
  ErrorInputFile,
  PreviewImg,
} from './FormPages.styled';

export const FileInputCopy = props => {
  const { name } = props;
  const { register, unregister, setValue, watch } = useFormContext();

  const files = watch(name);
  const onDrop = useCallback(
    droppedFiles => {
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 4,
    accept: {
      'image/*': ['.jpeg', '.png', '.webp'],
    },
  });

  useEffect(() => {
    register(name);

    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map(e => {
      console.log(e.message);
      return <p key={e.code}>{e.message}</p>;
    })
  );

  const Errors = () => {
    if (fileRejections.length > 1) {
      return (
        <>
          <ErrorInputFile>
            <p>Please select only 1 file</p>
          </ErrorInputFile>
        </>
      );
    }

    if (fileRejections.length === 1) {
      return (
        <>
          <ErrorInputFile>
            <p>{fileRejectionItems}</p>
          </ErrorInputFile>
        </>
      );
    }
  };

  const Preview = files => {
    return (
      <>
        <DivImg>
          {files.map((file, index) => (
            <PreviewImg key={index} src={URL.createObjectURL(file)} alt={file.name} />
          ))}
        </DivImg>
      </>
    );
  };
  {
    /* <PreviewPhoto src={URL.createObjectURL(files)} alt={files.name} /> */
  }

  //   const MyFullscreenDropzone = ({ children }) => {
  //     return (
  //         <Dropzone
  //             disableClick
  //             onDrop={files => console.log('on drop')}
  //             onDragEnter={onDragEnter}
  //             onDragLeave={onDragLeave}
  //             multiple={false}
  //         >
  //             {({ getRootProps, getInputProps }) => (
  //                 <div {...getRootProps()}>
  //                     <input {...getInputProps()} hidden />
  //                     {children}
  //                 </div>
  //             )}
  //         </Dropzone>
  //     )}
  // };

  // const [isDragging, setIsDragging] = React.useState(false);
  // const dragCounter = React.useRef(0);

  // const handleDrag = React.useCallback(event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  // }, []);
  // const handleDragIn = React.useCallback(event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   dragCounter.current++;
  //   if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
  //     setIsDragging(true);
  //   }
  // }, []);
  // const handleDragOut = React.useCallback(event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   dragCounter.current--;
  //   if (dragCounter.current > 0) return;
  //   setIsDragging(false);
  // }, []);
  // const handleDrop = React.useCallback(event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   setIsDragging(false);
  //   if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
  //     dragCounter.current = 0;
  //     console.log(event.dataTransfer.files);
  //     event.dataTransfer.clearData();
  //   }
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener('dragenter', handleDragIn);
  //   window.addEventListener('dragleave', handleDragOut);
  //   window.addEventListener('dragover', handleDrag);
  //   window.addEventListener('drop', handleDrop);
  //   return function cleanUp() {
  //     window.removeEventListener('dragenter', handleDragIn);
  //     window.removeEventListener('dragleave', handleDragOut);
  //     window.removeEventListener('dragover', handleDrag);
  //     window.removeEventListener('drop', handleDrop);
  //   };
  // });
  return (
    <>
      <LabelFile htmlFor={name}>
        <InputFileWrap {...getRootProps()} type="file" role="button" aria-label="" id={name}>
          <InputFile {...props} {...getInputProps()} />
          {acceptedFiles?.length === 0 && <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />}
          {!!acceptedFiles?.length && Preview(files)}
          {/* <PreviewPhoto src={URL.createObjectURL(files)} alt={files.name} /> */}
          {/* <Errors /> */}
        </InputFileWrap>
      </LabelFile>
    </>
  );
};
