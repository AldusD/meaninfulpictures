import app, { init } from './app';

const port = +process.env.PORT || 5002;

init().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}.`);
  });
});
