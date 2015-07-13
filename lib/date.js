var MyDate = function () { 
    this.year = 0;
    this.month = 0;
    this.date = 0;
    this.hour = 0;
    this.minute = 0;
    this.seconds = 0;
}

/**
 * get current day time ot date
 * @parm fmtStr string formation  example 'yyyy-mm-dd hh:mm:ss' 
 * @return 2015-05-06 12:22:33
 * */
MyDate.prototype.dateFmtStr = function (fmtStr, callback){
    if (fmtStr === undefined || fmtStr===null || fmtStr==='') {
        return callback(new Error({ code: 0, msg: 'The format string cannot be empty!' }));
    }
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.date = new Date().getDate();
    this.hour = new Date().getHours();
    this.minute = new Date().getMinutes();
    this.seconds = new Date().getSeconds();

    if (this.month<10) { this.month = "0" + this.month;}
    
    if (this.date < 10) { this.date = "0" + this.date;}
    
    if (this.hour < 10) { this.hour = "0" + this.hour;}
    
    if (this.minute < 10) { this.minute = "0" + this.minute;}
    
    if (this.seconds < 10) { this.seconds = "0" + this.seconds;}

    switch(fmtStr.toUpperCase()) {
        case "YYYY-MM-DD":
            return callback(null, this.year + "-" + this.month + "-" + this.date);
            break;
        case "YYYY-MM-DD HH:MM:SS":
            return callback(null, this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "YYYY/MM/DD":
            return callback(null, this.year + "/" + this.month + "/" + this.date);
            break;
        case "YYYY/MM/DD HH:MM:SS":
            return callback(null, this.year + "/" + this.month + "/" + this.date + " " + this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "YYYYMMDD":
            return callback(null, this.year + this.month + this.date);
            break;
        case "YYYYMMDDHHMMSS":
            return callback(null, this.year + this.month + this.dates + this.hour + this.minute + this.seconds);
            break;
        case "HH:MM:SS":
            return callback(null, this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "HHMMSS":
            return callback(null, this.hour + this.minute + this.seconds);
            break;
    }
}

/**
 * formation data string to date  
 * @parm fmtStr string formation  example 'yyyy-mm-dd hh:mm:ss dateStrin example 20150601122223'   
 * @return 2015-05-06 12:22:33
 * */
MyDate.prototype.strFmtDate = function (fmtStr, dateStr, callback){
    if ((fmtStr === undefined || dateStr === undefined || fmtStr===null || fmtStr ==='' || dateStr===null || dateStr==='') && dateStr.length < 14)  {
        return callback(new Error({ code: 0, msg: 'missing parameters!' }));
    }
    this.year = dateStr.substring(0, 4);
    this.month = dateStr.substring(4, 6);
    this.date = dateStr.substring(6, 8);
    this.hour = dateStr.substring(8, 10);
    this.minute = dateStr.substring(10, 12);
    this.seconds = dateStr.substring(12, 14);
    switch (fmtStr.toUpperCase()) {
        case "YYYY-MM-DD":
            return callback(null,this.year + "-" + this.month + "-" + this.date);
            break;
        case "YYYY-MM-DD HH:MM:SS":
            return callback(null, this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "YYYY/MM/DD":
            return callback(null, this.year + "/" + this.month + "/" + this.date);
            break;
        case "YYYY/MM/DD HH:MM:SS":
            return callback(null, this.year + "/" + this.month + "/" + this.date + " " + this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "YYYY-MM-DD HH:MM:SS":
            return callback(null, this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "YYYYMMDD":
            return callback(null, this.year + this.month + this.date);
            break;
        case "YYYYMMDDHHMMSS":
            return callback(null, this.year + this.month + this.dates + this.hour + this.minute + this.seconds);
            break;
        case "HH:MM:SS":
            return callback(null, this.hour + ":" + this.minute + ":" + this.seconds);
            break;
        case "HHMMSS":
            return callback(null, this.hour + this.minute + this.seconds);
            break;
    }
}

module.exports = MyDate;