import { createContext, useReducer ,useState} from 'react'
import githubReducer from './GithubReducer'


const GithubContext = createContext()
const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN
export const GithubProvider = ({ children }) => {



    const initialState={
        users:[],
        user:{},
        loading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)


    const clearUsers=async ()=>{

        dispatch({
            type:'CLEAR_USERS',
            payload:[]
        })

    }

    const getUser=async (login)=>{

        setLoading()

        console.log(login);

        const response= await fetch(`${GITHUB_URL}/users/${login}`,
        {
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`,
            },
        }
        )

        if(response.status===404){
            window.location='/notfound' ;
        }
        else{   const item = await response.json();
  console.log(item);
        dispatch({
            type:'GET_USER',
            payload: item,
        })
}
    

     

}


    const searchUsers=async (text)=>{

        setLoading()

        const params= new URLSearchParams({
            q:text
        })

        const response= await fetch(`${GITHUB_URL}/search/users?${params}`,
        {
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`,
            },
        }
        )
    

    const {items} = await response.json();
  
        dispatch({
            type:'GET_USERS',
            payload: items,
        })

}

const setLoading=()=>{
    dispatch({type:'SET_LOADING'})
}

return <GithubContext.Provider value={{
    users:state.users,
    loading:state.loading,
    user:state.user,
    searchUsers,
    clearUsers,
    getUser,
}}>
    {children}
</GithubContext.Provider>












}

export default GithubContext