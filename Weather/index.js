const http = require("http");
const fs = require("fs");
const requests = require("requests")

const homeFile = fs.readFileSync("home.html","utf-8");


const replaceval = (orgval)=>{
    let temperature = homeFile.replace("{%tempval%}",orgval.main.temp);
    temperature = homeFile.replace("{%tempmin%}",orgval.main.temp_min);
    temperature = homeFile.replace("{%tempmax%}",orgval.main.temp_max);
    temperature = homeFile.replace("{%location%}",orgval.main.temp.name);
    temperature = homeFile.replace("{%country%}",orgval.sys.country);
    temperature = homeFile.replace("{%tempstatus%}",orgval.weather[0].main);
    return temperature;
}
const server = http.createServer((req,res)=>{

    if(req.url == '/'){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8f28661d92a9089109625e1019b01d6b")
        .on("data",(chunk)=>{
            console.log(chunk)
            const objdata = JSON.parse(chunk);
            const arrobj = [objdata];
            
            const realTimeData =  arrobj.map((val)=>{
                replaceval(val);
                
            })
            console.log(realTimeData)
            res.write(
                homeFile
            )
        })
        .on("end",(error)=>{
            if(error) return console.log("connection closed due to errors",error);
            res.end();
        })
    }
})

server.listen(8023, "127.0.0.1")
