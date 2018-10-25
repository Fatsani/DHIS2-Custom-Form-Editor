import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

ClassicEditor
    .create( document.querySelector( '.editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic, Table, TableToolbar, Heading],
        toolbar: [ 'bold', 'italic', 'insertTable', 'heading'],
        table: {
            contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        }
    } )
    .then( editor => {
        //console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        //console.error( error.stack );
    } );