export default function timehandler(요청,응답){
    const now=new Date()
    console.log(now)

    if(요청.method=='POST'){
       return 응답.status(400).json(now)
    }
}