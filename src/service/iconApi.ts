const key = "FzAcOlMWYnk26rTCcu8xwck6anGfkn1A2GgdSkkHFq9kdtl3";

 
export default async function iconApi(query:string){
   return await fetch(`https://api.flaticon.com/v2/search/icons?query=${query}&api_key=${key}`)
    .then(response => response.json())
}