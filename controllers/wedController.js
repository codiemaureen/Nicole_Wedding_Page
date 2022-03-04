exports.homePage = (req, res) => {
    res.render('homepage', {title: 'Nicole + Jason'});
};

exports.addresses = (req, res) => {
    res.render('addresses', {title: 'Addresses'});
};

exports.photos = (req, res) => {
    res.render('photos', {title: 'Photos'});
};