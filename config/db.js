var con=require('./db');
var schema=require('./SchemaDefination');
var {createInstructor,createCourses,createLeads,createComment}=schema;
var list=[createInstructor,createCourses,createLeads,createComment];

function createTables(){
con.connect(function(err) {
  if (err) throw err;
  list.forEach((item)=>{
    con.query(item(),(err,result)=>{
    if (err) throw err;
  //  console.log(result);
   // console.log("Table created");
  })
  })
});
}
module.exports = createTables;
