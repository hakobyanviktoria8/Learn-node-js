const nodemailer = require('nodemailer');

console.log(nodemailer);


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ""
    }
});

var mailOptions = {
    from: 'hakobyanviktorya8@gmail.com',
    to: 'hakobyan_viktoria@mail.ru',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});





