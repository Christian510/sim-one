


const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const massive = require( 'massive' );
const app = express();
app.use( bodyParser.json() );
app.use( cors() );

require( 'dotenv' ).config();
massive( process.env.DATABASE_URL )
.then( db => { app.set( 'db', db ) })
.catch(err => { console.log( err ) });


// CRUD Endpoints
app.get('/get/products', (req, res) => {
    req.app.get('db').get_all_products().then( response => {  
        res.status( 200 ).send( response );
    })
    .catch( err => {
        res.status( 500 ).send( err )
    });
});
app.post( '/add/products', (req, res) => {
    const { img_url, productName, price } = req.body; 
    req.app.get('db').add_products( img_url, productName, price ).then(
        response => {
            res.status( 200 ).send( response );
        })
    .catch( err => {
        res.status( 500 ).send( err );
    });
} );

app.put( '/update/products/:id', (req, res) => {
    req.app.get('db').update_products().then(
        response => {
            res.status( 200 ).send( response );
        })
        .catch( err => {
            res.status( 500 ).send( err )
        });
} );

app.delete( '/delete/products/:id', ( req, res ) => {
    const { id } = req.params;
    console.log(id);
    req.app.get('db').delete_product([id]).then( product => {
        res.status( 200 ).send( product );
        console.log( '===== Deleted =====');
        })
        .catch( err => {
            res.status( 500 ).send( err );
        });
} );

const port = process.env.SERVER_PORT;
app.listen( port, () => { console.log(`Listening on port ${port}`) } );





