const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.Js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }

    res.render('blogpost', { post });
})

app.get('/dashboard', (req, res) => {
    const items = ['Item A', 'Item B', 'Item C'];

    res.render('dashboard', { items });
})

app.get('/', (req, res) => {
    const user = {
        name: 'Emerson',
        surname: 'Thiago',
        age: 20
    }

    const palavra = 'Teste';

    const auth = false;
    const approved = false;

    res.render('home', { user, palavra, auth, approved });
});

app.listen(3000, () => {
    console.log('App funcionando!');
})