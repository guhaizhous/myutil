var myutil =require('myutil');
myutil.date.dateFmtStr("yyyy-mm-dd", function (err, data) { 
    console.log(err, data);
});
myutil.date.strFmtDate("yyyy-mm-dd", "20150601122223", function (err, data) { 
    console.log(err, data);   
});
