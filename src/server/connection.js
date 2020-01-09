require('dotenv').config();


const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
var cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const token = require('randomstring')
var session = require('express-session');
var mySqlSession = require('express-mysql-session')(session)
var async = require('async')
const sha1 = require('sha1')
app.use(bodyParser.json({ type: 'application/json' }))

app.use(cors());

// var options = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// };

//connecting to the mysql database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
// var connection = mysql.createConnection(options);

// var sessionStore = new mySqlSession({}, connection);

// app.use(session({
//     secret: 'iovjcwdf',
//     resave: false,
//     store: sessionStore,
//     saveUninitialized: false,
// }));


//create token number
const secretToken = token.generate();






//for Email verification link

const transport = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

var transporter = nodemailer.createTransport(transport)

//Store in database for the sign up page
app.post('/signup', (req, res) => {

    console.log("Inside Signup");
    host = req.get("host")

    var sql = "INSERT INTO userInfo (firstName, lastName, Email, pswd,token) VALUES ?"
    var values = [[req.body.Fname, req.body.Lname, req.body.Email, req.body.password, secretToken]]
    connection.query(sql, [values], function (err, result) {
        if (err) {
            if (err.errno === 1062)
                res.send({ 'message': 1 })
            else
                console.log(err)
        }
        else {
            res.send({ 'message': 2 })
            Message = {
                from: 'admin@IT-ticketSystem',
                to: req.body.Email,
                subject: 'Please verify your email',
                //text:' Hi there, Thank you for registering! <br/> <br/> Please verify your email by this token: <br/> <b> Token: `token`<b> ',
                html: 'Hi there, <br/> Thank you for registering! <br/> <br/>Please verify your email by typing following token on the verification page<br/><b> Token:' + secretToken + ' </b><br/>'
            }
            transporter.sendMail(Message, function (error, info) {
                if (error)
                    console.log(error);
            })

            console.log("Inserted.")
        }

    });
})


//Verify the email 
app.post('/verify', (req, res) => {
    var values = [[req.body.Email]]

    var sql = "SELECT Email, myBool, token from userInfo WHERE BINARY Email = ?"
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        var forPassword = JSON.stringify(result)
        var forPw = JSON.parse(forPassword)
        if (Object.keys(forPw).length === 0) {
            res.send({ "message": 1 })
        }
        else
            if (forPw[0].token === req.body.SecretToken) {
                var change = "UPDATE userInfo SET myBool='1' WHERE Email=?"
                connection.query(change, [values], function (err, result) {
                    if (err) throw err;
                    console.log("Updated");
                })
                res.send({ "message": 0 })
            }
            else
                res.send({ "message": 2 })
    })


})

//Store in database for loginpage
app.post('/loginPage', (req, res) => {
    console.log("inside login");
    var values = [[req.body.emailAddress]]
    var sql = "SELECT Email, pswd, myBool, Permission from userInfo WHERE BINARY Email = ?"
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        var forPassword = JSON.stringify(result)
        var forPw = JSON.parse(forPassword)
        if (Object.keys(forPw).length === 0) {
            res.send({ "message": 1 })
        }
        else {
            if (forPw[0].pswd == req.body.password) {
                if (forPw[0].myBool === 0) {
                    res.send({ "message": 3 })
                }
                else {
                    if (forPw[0].Permission == 0)
                        res.send({ "message": 0, "permission": 0 })
                    else
                        res.send({ "message": 0, "permission": 1 })
                }
            }
            else {

                res.send({ "message": 2 })


            }
        }
    })
})

// To store the Ticket in the database 

app.post('/openticket', (req, res) => {
    console.log("inside open ticket")
    var sql = "INSERT INTO tickets (firstName,lastName,Email, description, date, Department) VALUES ?"
    var values = [[req.body.fName, req.body.lName, req.body.Email, req.body.description, req.body.date, req.body.department]]
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;


    })

})

//For admin Main page
app.post('/MainPageAd', (req, res) => {
    console.log("inside Admin main page")
    var sql = "SELECT number, firstName, lastName, description, department, status, date from TICKETS"
    var data = {};
    connection.query(sql, function (err, result) {
        if (err) throw err;
        var value = JSON.stringify(result)
        var parsedValue = JSON.parse(value)
        
        //This function is used to make sure that status would be on the lowercase 
        var newParsedValue = parsedValue.map(function (key, value) {
            return {
                number:key.number,
                firstName: key.firstName,
                lastName: key.lastName,
                description: key.description,
                department: key.department,
                status: key.status.toLowerCase(),
                date: key.date.slice(0,-14)
            }
        })

       data.tickets = newParsedValue
        //To send all the open tickets
        var openTicket = newParsedValue.filter(function (value) {
            return value.status == "open"
        })
        data.openTicket = openTicket

        //to send all the closed tickets
        var closedTicket = newParsedValue.filter(function (value) {
            return value.status != "open"
        })
        data.closedTicket = closedTicket

        //To send the count of open tickets
        var openTicketCount = Object.keys(openTicket).length
        data.openTicketCount = openTicketCount

        //To send count of closed tickets
        var closedTicketCount = Object.keys(closedTicket).length
        data.closedTicketCount = closedTicketCount

        //to send count of total tickets
        var totalTicketCount = openTicketCount + closedTicketCount
        data.totalTicketCount = totalTicketCount

        res.send(data)
    })

})

app.post("/MainPage", (req, res) => {
    console.log("Inside user's main page")
    var data = {}
    var values = [[req.body.Email]]
    sql1 = "SELECT firstName, lastName FROM userInfo WHERE BINARY Email = ?"
    sql2 = "SELECT firstName, lastName, description, department, status from TICKETS WHERE BINARY Email=?"


    async.parallel([
        function (parallel) {
            connection.query(sql1, [values], function (err, result) {
                if (err) throw err
                var fetchName = JSON.stringify(result)
                var Name = JSON.parse(fetchName)
                data.name = Name
                parallel()
            })
        },
        function (parallel) {
            connection.query(sql2, [values], function (err, result) {
                var fetchTickets = JSON.stringify(result)
                var tickets = JSON.parse(fetchTickets)

                //This function is used to make sure that status would be on the lowercase 
                var newParsedValue = tickets.map(function (key, value) {
                    return {
                        firstName: key.firstName,
                        lastName: key.lastName,
                        description: key.description,
                        department: key.department,
                        status: key.status.toLowerCase()
                    }
                })

                var openTicket = newParsedValue.filter(function (value) {
                    return value.status == "open"
                })
                data.openTicket = openTicket
                //to send all the closed tickets
                var closedTicket = newParsedValue.filter(function (value) {
                    return value.status != "open"
                })
                data.closedTicket = closedTicket

                //To send the count of open tickets
                var openTicketCount = Object.keys(openTicket).length
                data.openTicketCount = openTicketCount

                //To send count of closed tickets
                var closedTicketCount = Object.keys(closedTicket).length
                data.closedTicketCount = closedTicketCount

                //to send count of total tickets
                var totalTicketCount = openTicketCount + closedTicketCount
                data.totalTicketCount = totalTicketCount


                parallel()
            })
        }
    ], function(err){
        if (err) throw err
        res.send(data)
    })
})



app.post("/myTicketsAd",(req,res)=>{
    console.log("inside myticketAd", req.body)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    connection.connect(() => {
        console.log("Connected to Db Yayy")
    }
    )
})