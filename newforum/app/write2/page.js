import { connectDB } from "@/util/database"
import { revalidatePath } from "next/cache";

export default async function Write2(){

    async function handleSubmit(formData){
        // 서버api보관 - form 전송시 이 코드 실행됨
        'user server'

        const db=(await connectDB).db.collection('nextforum');
        await db.collection('post_test').insertOne({title:formData.get('title')})
        console.log(formData.get('title'))
        {/* server actions는 새로고침을 하고싶으면 revalidateTag(), revalidataPath()-새로고침 기능 */}
        revalidatePath('/write2')
    }
    return(
        <div>
            {/* server actions- 폼전송시 동작할 서버 API를 여기에 작성해도된다. */}
            <form action={handleSubmit}>
                <input name="title"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}