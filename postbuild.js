import * as fs from "fs"
const banned=[".git"]
fs.readdirSync("./dist").map((item)=>{
  console.log(item)
  if(banned.includes(item)){return}
  fs.renameSync("./dist/"+item,"./dist/"+item.split(".")[0].split("-")[0]+"."+item.split(".")[1])
})
