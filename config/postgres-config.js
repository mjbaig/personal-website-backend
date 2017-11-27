const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'testdatabase'
  })


async function test(){
    await client.connect()
    
    const res = await client.query('SELECT $1::text as message', ['Connection Successful!'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()

    
}

async function test2(){
    await client.connect()
    
    try{
        const res = await client.query('CREATE TABLE IF NOT EXISTS films (code char(5) CONSTRAINT firstkey PRIMARY KEY,title varchar(40) NOT NULL);')
        console.log(res.rows[0]) // Hello world!
    }catch(r){
        console.log(r)
    }


    const res2 = await client.query('INSERT INTO films VALUES (\'UA05\', \'Bananas\');')

    console.log(res2.rows[0]) // Hello world!

    const res3 = await client.query('select * from films;')

    console.log(res3.rows) // Hello world!
    await client.end()

    
}

test2()