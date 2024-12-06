const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kshama123',
    database: 'TODOAPP',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Route to handle registration
app.post('/addregister', async (req, res) => {
    try {
        const { Name, Password, Email } = req.body;

        if (!Name || !Password || !Email) {
            return res.status(400).send({ error: 'Name, Password, and Email are required' });
        }

        console.log(`Registering user: Name=${Name}, Email=${Email}`);

        const query = 'INSERT INTO USER_DETAILS (USERNAME, USERPASSWORD, USEREMAIL) VALUES (?, ?, ?)';
        const [result] = await pool.query(query, [Name, Password, Email]); 

        console.log(`User added with ID: ${result.insertId}`);

        res.status(201).send({ message: 'ACCOUNT CREATED SUCCESSFULLY', userId: result.insertId });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
