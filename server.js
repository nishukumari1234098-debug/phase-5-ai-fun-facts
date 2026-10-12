import express from "express"
import { GoogleGenAI } from '@google/genai'
import dotenv from "dotenv"
dotenv.config()
const app = express()


app.use(express.json())

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
})

app.get("/fun-fact", async (req, res) => {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Generate an interesting random fun fact."
    })

    res.json({
        fact: response.text
    })

})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("Server has started")
})


// import express from "express";

// const app = express();

// app.use(express.json());

// let books = [];


// // POST - Create book
// app.post("/books", (req, res) => {

//     const book = {
//         id: Date.now(),
//         name: req.body.name,
//         stock: req.body.stock
//     };

//     books.push(book);

//     res.status(201).json({
//         message: "Book created successfully",
//         data: book
//     });
// });


// // GET - Get all books
// app.get("/books", (req, res) => {

//     res.json({
//         data: books
//     });
// });


// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });