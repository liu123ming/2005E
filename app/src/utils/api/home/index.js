import server from '@/utils/api/server'
const getBanners=async function(){
    console.log('/index');
    let{data}=await server.get('/api.com/index')
    return data
}
export {
    getBanners
}