const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const path = require('path');
const morgan =require('morgan');
const app =express();
const port = 8000

app.use(morgan('combined'))
// รองรับstactic  ถ้าเข้ามาแล้วมันจะหาหน้าindexเลย
app.use(express.static(path.join(__dirname,"/public/")));
// จัดการrequest 
// ถ้าหาindex.htmlไม่เจอมันจะ res ส่วนนี้กลับไป
app.get("/",(req,res)=>{

    res.send('Hi');
})

app.listen(port,()=>{
    debug(chalk.blue("Lisening on port"));
})