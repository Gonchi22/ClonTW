
import './App.css' // Importamos a nivel de componente 
import { TwitterFollowCard } from './TwitterFollowCard'

const  users  = [
    {
       userName: 'gonzalo_corb0',
       name: "gonchy'",
       isFollowing: true
    },
    {
        userName: 'valemar7404',
        name: 'valee',
        isFollowing: false
    },
    {
        userName: 'Nahuel_Carrion',
        name: 'Nahuel',
        isFollowing: true
    },
    {
        userName: 'Santiago_Neira',
        name: 'Santiago ',
        isFollowing: false
    }
]


export function App() {
    
    return (
        <section className='App'>
          
            {
                users.map(user => {
                    const {userName, name,isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName= {userName}
                        initialIsFollowing={isFollowing}
                        >
                           {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    )
}