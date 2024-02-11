'use client'
import DropzoneComponent from 'react-dropzone'

export default function Dropzone() {
    return (
        <DropzoneComponent onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject, fileRejections}) => (
            <section>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                 {!isDragActive && 'click to select files'}
                 {isDragActive && !isDragReject && 'Drop to upload files'}
                <p>Drag drop some files here, or click to select files</p>
                {isDragReject && 'File type not accepted'}
                {isFileTooLarge && (
                    <div></div>
                )}
            </div>
            </section>
        )}
        </DropzoneComponent>
    )
}