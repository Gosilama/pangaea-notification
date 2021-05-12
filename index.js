const { pub, sub } = require('./servers');

pub.listen(8000, () => {
    console.log('Publisher running on port 8000');
});

sub.listen(9000, () => {
    console.log('Subscriber running on port 9000');
});
