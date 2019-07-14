import express from 'express';
import { listBooks, getBook, addBook, updateBook, deleteBook } from './controllers/book';

const app = express();

app.set('port', process.env.PORT || 3000);

// routers
app.get('/books', listBooks);
app.get('/books/{id}', getBook);
app.post('/add', addBook);
app.put('/books/{id}', updateBook);
app.delete('/books/{id}', deleteBook);

app.listen(app.get('port'), () => {
  console.log('App is running on http://localhost:%d', app.get('port'));
});
