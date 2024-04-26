const port = 4000;
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const multer = require("multer");

const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection with mongodb

mongoose.connect(
  "mongodb+srv://mohdmajid9123:shop123@cluster0.qjrtojy.mongodb.net/shopping-app"
);

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
app.listen(port, (error) => {
  if (!error) {
    console.log("server Running on port :- " + port);
  } else {
    console.log("Error :- " + error);
  }
});
