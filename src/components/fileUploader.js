import React, { useState, useEffect, useCallback, useContext } from 'react';
import EntityProvider from '../context'

export const FileUploader = () => {
    const { setFile } = useContext(EntityProvider.context)
    const handleUploadFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            const myFile = event.target.files[0];
            const reader = new FileReader();

            reader.addEventListener('load', function (e) {
                console.log(e.target.result)
                setFile(e.target.result)
            });

            reader.readAsBinaryString(myFile);
        }

    }
    return (
        <div>

            <div>
                <input className="file-upload" type="file" onChange={handleUploadFile} />
            </div>
        </div>
    )
}