const fs=require('fs')
const path=require('path')

const send=(res)=>{

    const filePath=path.join(__dirname,'..','posts.json')
            fs.readFile(filePath,(err,data)=>{
                if(err){
                    res.writeHead(500)
                    res.end('server error')
                }
                res.writeHead(200)
                res.end(data)
            })

}

module.exports =send