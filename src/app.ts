import express, { Request, Response } from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req: Request, res: Response) => res.send('hello world'));
app.listen(app.get('port'), () => {
  console.log('App is running on http://localhost:%d', app.get('port'));
});
