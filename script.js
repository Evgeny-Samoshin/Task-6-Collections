"use strict";

var model = [
  {
    id: 0,
    title: 'Title text 1',
    text: 'Some text 1',
    user: {
      id: 0,
      name: 'user 1',
    },
  }, {
    id: 1,
    title: 'Title text 2',
    text: 'Some text 2',
    user: {
      id: 1,
      name: 'user 2',
    },
  }, {
    id: 2,
    title: 'Title text 3',
    text: 'Some text 3',
    user: {
      id: 0,
      name: 'user 1',
    },
  }, {
    id: 3,
    title: 'Title text 4',
    text: 'Some text 4',
    user: {
      id: 2,
      name: 'user 3',
    },
  }, {
    id: 4,
    title: 'Title text 5',
    text: 'Some text 5',
    user: {
      id: 0,
      name: 'user 1',
    },
  }
];

let users = new Set();

model.map((item) => {
  users.add(JSON.stringify(item.user));
});

users = [...users].map(item => {
  return JSON.parse(item);
});

users.forEach((user) => {
  user.posts = [];
  model.map((post) => {
    if (post.user.id === user.id) {
      user.posts.push({ 'id': post.id, 'title': post.title, 'text': post.text });
    }
  })
  console.log(user);
});
