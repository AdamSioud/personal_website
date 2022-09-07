import {userRouter} from 'next/router';

  export default function post(props){
    const router = userRouter()
    console.log(router, 'routes')
      return (
        <h2> post {router.querey.id}</h2>
      )
  }


