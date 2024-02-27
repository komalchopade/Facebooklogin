//Facebook Login sucessfuly//
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
//const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json());

// Placeholder array for Linkedin data
let Facebook = [
    { emailid: 'Komal', password: 'komalganesh24@gmail.com' },
    { emailid: 'Ganesh',password: 'ganesh24@gamil.com' }
];
// Get all Linkedin data
app.get('/Facebook', (req, res) => {
    res.json(Facebook);
});


// Insert
app.post('/create', async (req, res) => {
    const { email, password } = req.body;

       const isLoginSuccessful = true;

    if (isLoginSuccessful) {
        res.send('Login successful');
    } else {
        res.status(500).send('Error');
    }
});

//Update password
app.put('/password/update', async(req, res)=>
{
    const { password} =req.body;

    const isPasswordSuccessful =true;

    if(isPasswordSuccessful){
        res.send("password updated successful");
    }
    else
    {
        res.status(500).send('Error');
    }
} )
// Delete profile
app.delete('/Facebook/:profile', (req, res) => {
    // Add logic to delete profile
    const { profile } = req.params;

    const isProfileDeleteSuccessful = true; 

    if (isProfileDeleteSuccessful) {
        res.send("Profile delete successful");
    } else {
        res.status(500).send("Error deleting profile");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
