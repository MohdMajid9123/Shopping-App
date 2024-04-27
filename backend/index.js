const port = 4000;
const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

const mongoose = require("mongoose");

const multer = require("multer");

const path = require("path");
const cors = require("cors");

// database connection with mongodb

mongoose.connect(
  "mongodb+srv://mohdmajid9123:shop123@cluster0.qjrtojy.mongodb.net/shopping-app"
);

// app.use(express.json());

app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.status(400).send({
      status: 400,
      message: "Bad request. The JSON data is not properly formatted.",
    }); // Sending error response
  }
  next();
});
app.use(cors());

// app.use(cors());

app.use(express.raw({ type: "application/json" }));
app.use((req, res, next) => {
  console.log(req.body.toString()); // Logging the body as string
  next();
});

// api creation

app.get("/", (req, res) => {
  res.send("express app is running now");
});

// image storage  engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

//creating uplodad endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({}).maxTimeMS(10000); // Increase timeout to 10 seconds
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();

    console.log("data is saved");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// creating api for deleting products

app.post("/removeProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("product is removed");

  res.json({
    success: true,
    name: req.body.name,
  });
});

// create api for getting all products;

app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all Products gotted");
  res.send(products);
});

//shema creating for user model
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// creating endpoint for registering the user

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });

  if (check) {
    return res.status(400).json({
      success: false,
      error: "existing user found with same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");

  res.json({ success: true, token });
});

//creating endpoint for user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "wrong password" });
    }
  } else {
    res.json({ success: false, errors: "wrong email id" });
  }
});

// creating endpoint for NewConnnection data

app.get("/newCollection", async (req, res) => {
  let products = await Product.find({});

  let newCollection = products.slice(1).slice(-8);
  console.log("New Collection fetch");
  res.send(newCollection);
});

// my server port or url here
app.listen(port, (error) => {
  if (!error) {
    console.log("server Running on port :- " + port);
  } else {
    console.log("Error :- " + error);
  }
});
