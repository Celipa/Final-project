const app = require('./app.js')
const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
//Nedre är till för Auth
// const application = require('./app.js')
// require('dotenv').config()

const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb+srv://AlvaDb:BytMig123@testdb.s0fjhfi.mongodb.net/NodeAPI"

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.get('/', (req, res) => {
    res.send('Hello Node API');
});
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);
const orderRoutes = require('./routes/orderRoutes')
app.use('/orders', orderRoutes)
const messageRoutes = require('./routes/messageRoutes');
app.use('/messages', messageRoutes);



// //Hämtar produkter
// app.get('/products', async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }
// });


// //hämtar produkter med specifikt id
// app.get('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }
// });


// //Skapar en ny produkt
// app.post('/products', async(req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(201).json(product);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }
// });

// //Uppdaterar en produkt med specifikt id
// app.put('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate
//         (id, req.body);
//         if (!product) {
//             return res.status(404).json({message: `Product with id ${id} not found`});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }});

// //Tar bort en produkt med specifikt id
// app.delete('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({message: `Product with id ${id} not found`});
//         }
//         res.status(200).json({message: `Product with id ${id} deleted`});
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }
// });


// //Skapar ett nytt meddelande
// app.post('/messages', (req, res) => {
//     try {
//         const { name, email, message } = req.body;
//         if (!name || !email || !message) {
//             return res.status(400).json({ message: 'Missing required fields: name, email, and message' });
//         }
//         res.status(200).json({ message: 'Message sent successfully' });
//         res.status(200).json, Message.create(req.body);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({error: error.message});
//     }
// });

// app.get('/messages', async(req, res) => {
//     try {
//         const messages = await Message.find({});
//         res.status(200).json(messages);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: "failed to get messages"});
        
//     }
// });


//Skapar en ny inloggning
// app.post('/register', (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Missing required fields: email and password' });
//         }
//         res.status(200).json({ message: 'User registered successfully' });
//         res.status(200).json, Register.create(req.body);
//     } catch (error) {
//         console.log("Failed to register user");
//         res.status(500).json({error: error.message});
//     }
// });

// app.get('/register', async(req, res) => {
//     try {
//         const accounts = await Register.find({});
//         res.status(200).json(accounts);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
        
//     }
// });



// app.post('/login', async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.status(400).json({ message: 'Missing required fields: email and password' });
//       }
  
//       const user = await Login.findOne({ email });
  
//       if (!user) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }
  
//       const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
//       if (!isPasswordCorrect) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }
  
//       res.status(200).json({ message: 'User logged in successfully' });
//     } catch (error) {
//       console.log("Failed to log in user");
//       res.status(500).json({ error: error.message });
//     }
//   });



//Här kopplar vi upp oss mot MongoDB
//  mongoose.connect('mongodb+srv://AlvaDb:BytMig123@testdb.s0fjhfi.mongodb.net/NodeAPI')
//      .then(() => {
//          app.listen(3000, () => {
//              console.log('Server is running on port 3000');
//          });
//          console.log('Connected to MongoDB...');
//      }
//      )
//      .catch(err => {console.error('Could not connect to MongoDB...', err)});



 app.listen(PORT, () => console.log('Server is running on http://localhost:' + PORT))

 const connectDB = async () => {
     try {
         if(!MONGO_URI) throw new Error('MongoURI is missing')
         await mongoose.connect(MONGO_URI)
         console.log('Connected to MongoDB');        
     } catch (error) {
         console.error(error)
         process.exit(1)
     }
 }
 connectDB();


// const connectDB = async () => {
//     try {
//         if (!MONGO_URI) {
//             throw new Error('MongoURI is missing')

//         await mongoose.connect(MONGO_URI)
//             console.log('Connected to MongoDB');
        
//         } catch (error) {
//         console.error()
//         process.exit(1)
//     }
// connectDB();
// }
// }
// );