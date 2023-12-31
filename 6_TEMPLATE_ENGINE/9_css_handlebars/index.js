const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.Js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }

    res.render('blogpost', { post });
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 5
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 6
        },

    ]

    res.render('blog', { posts });
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