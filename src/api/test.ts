import { getBlogs } from "./blogs";

getBlogs()
.then((data)=>console.log(data))
.catch((err)=>console.error(err));