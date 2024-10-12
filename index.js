//self written

//all are predefined

//importing json server
const jsonServer=require('json-server');

//cerate server using create() method
const mediaPlayerServer= jsonServer.create();

//create  a path/route to db.json file
const router=jsonServer.router('db.json')

//create a middle ware
//to convert json file to js object
const middleware=jsonServer.defaults();

//add middleware and router to mediaPlayerServer

mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const PORT=4000;
//port to run the program
//number can be our wish
//run the mediaPlayerServer
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Mediaplayer server runnimg on PORT ${PORT}`);
})