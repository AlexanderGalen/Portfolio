import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'

export default function ResumeFile() {

	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	  }

	return(
		<section>
			<Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={1}/>
			</Document>
		</section>
	)}
