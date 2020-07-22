import React, { useState, useEffect, useCallback, useContext } from 'react';
import EntityProvider from '../context'
import './displayTable.css'

export const FileTable = () => {
    const { file } = useContext(EntityProvider.context)
    const [fileData, setFileData] = useState([]);
    const [delimiter, setDelimiter] = useState(',')

    useEffect(() => {
        if (file) {
            let fileData = file.split(delimiter);
            setFileData(fileData);

        }


    }, [delimiter, file])
    const changeHandler = (e) => {
        setDelimiter(e.target.value)

    }
    return (
        <div>
            <label>delimiter:</label>
            <input onChange={changeHandler}></input>
            <label>Lines:</label>
            <input></input>
            <br />
            <table className="file-table">

                <tr>
                    {
                        fileData.map((data) => {
                            return <td key={data}>{data}</td>
                        })
                    }
                </tr>

            </table>
        </div>
    )
}