import React, { createContext, useState } from 'react';



const EntityContext = createContext();

/**
 * Creates File Uploader provider context
 */
export default function EntityProvider(props) {
    const [file, setFile] = useState(undefined);
    const { children } = props;


    const entityCtxCValue = {
        file,

        setFile,
    };

    return <EntityContext.Provider value={entityCtxCValue}> {children} </EntityContext.Provider>;
}

EntityProvider.context = EntityContext;
