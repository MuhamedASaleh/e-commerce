const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const port = 3000 || process.env.PORT;

app.use(express.json());

app.use(require(`./router/router`));

mongoose.connect(`mongodb://localhost:27017/e-commerce`, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
app.listen(port, () => {
  console.log(`app run on port ${port}`);
})

