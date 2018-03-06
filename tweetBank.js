const _ = require('lodash');

const data = [];

function add (name, content, photo) {
  data.push({ name: name, content: content, id: (data.length + 1).toString(), photo: photo });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
  };

  const getFakePhoto = function() {
    const fakePhotos = ['http://c8.alamy.com/comp/FB6GN0/angry-teenage-boy-making-faces-isolated-in-white-FB6GN0.jpg',
    'https://i.ytimg.com/vi/2sikJPJzgaA/maxresdefault.jpg',
    'https://static.pexels.com/photos/542282/pexels-photo-542282.jpeg',
    'https://static.pexels.com/photos/355164/pexels-photo-355164.jpeg'];
     return randArrayEl(fakePhotos);
  }

  const getFakeTweet = function() {
    const awesomeAdj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return 'Fullstack Academy is ' + randArrayEl(awesomeAdj) + '! The instructors are just so ' + randArrayEl(awesomeAdj) + '. #fullstacklove #codedreams';
  };

  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet(), getFakePhoto());
  }

  add('Captain Obvious', 'Wow twitter sure is taking off #Blessed', 'https://static.pexels.com/photos/355164/pexels-photo-355164.jpeg');
  add('Scott', 'Hi', 'https://i.ytimg.com/vi/2sikJPJzgaA/maxresdefault.jpg');

  console.log(data[5].photo);