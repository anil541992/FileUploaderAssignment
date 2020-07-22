import React, { Suspense } from 'react';
import { cleanup, getByTestId, fireEvent, render, waitFor } from '@testing-library/react';
import { FileUploader } from './components/fileUploader'

afterEach(cleanup);


const renderTableComponent = () => {
    return render(
        <Suspense fallback={<div>Loading...</div>}>
            <FileUploader />
        </Suspense>,
    );
};


describe('Test cases', () => {
    it('(1) Render File Component ', async () => {
        const { container } = renderTableComponent();
        let fileUploadButton;
        await waitFor(() => {
            fileUploadButton = getByTestId(container, 'file-upload');
        });

        expect(fileUploadButton).toBeDefined();

    });


});
