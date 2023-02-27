import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { TfiPlus } from 'react-icons/tfi';

import { InputFile, InputFileWrap, PreviewPhoto, ErrorInputFile } from './FormPages.styled';

export const FileInput = props => {
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
    maxFiles: 1,
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

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    console.log(errors);
    return errors.map(e => {
      return <p key={e.code}>{e.message}</p>;
    });
  });

  const Errors = () => {
    if (fileRejections.length > 1) {
      return (
        <>
          <ErrorInputFile>
            <span>Please select only 1 file</span>
          </ErrorInputFile>
        </>
      );
    }

    if (fileRejections.length === 1) {
      return (
        <>
          <ErrorInputFile>
            <span>{fileRejectionItems}</span>
          </ErrorInputFile>
        </>
      );
    }
  };

  return (
    <>
      <InputFileWrap {...getRootProps()} type="file" role="button" aria-label="" id={name}>
        <InputFile {...props} {...getInputProps()} />
        {acceptedFiles?.length === 0 && <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />}
        {!!acceptedFiles?.length && (
          <PreviewPhoto src={URL.createObjectURL(files[0])} alt={files[0].name} />
        )}
        <Errors />
      </InputFileWrap>
    </>
  );
};
