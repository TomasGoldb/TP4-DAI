import urrl from 'url'
import querystring from 'querystring'



const parsearUrl=(url)=>{
    try{
        const parsed = urrl.parse(url);
        const host=`${parsed.protocol}//${parsed.host}`;
        const pathname=parsed.pathname;
        const parametros=querystring.parse(parsed.query);

        return {
            "host": host,
            "pathname": pathname,
            "parametros": parametros
        }
    }catch(error){
        console.log(error);
    }
}

export default {
    parsearUrl
}