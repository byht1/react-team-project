import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { TfiPlus } from 'react-icons/tfi';

import {
  InputFile,
  LabelFile,
  InputFileWrap,
  PreviewPhoto,
  ErrorInputFile,
} from './FormPages.styled';

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

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map(e => {
      console.log(e.message);
      return <p key={e.code}>{e.message}</p>;
    })
  );

  const CountError = () => {
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

  return (
    <>
      <LabelFile htmlFor={name}>
        <InputFileWrap {...getRootProps()} type="file" role="button" aria-label="" id={name}>
          <InputFile {...props} {...getInputProps()} />
          {acceptedFiles?.length === 0 && <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />}
          {!!acceptedFiles?.length && (
            <PreviewPhoto src={URL.createObjectURL(files[0])} alt={files[0].name} />
          )}
          <CountError />
        </InputFileWrap>
      </LabelFile>
    </>
  );
};
