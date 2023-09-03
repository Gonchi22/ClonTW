import { useState } from "react"; //  HOOKS nos permiten es añadir cierta funcionalidad en los componentes, poder ejecutar codigo arbitrario

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguendo' : 'Seguir'; // Usamos ternaria 
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' ;
 
    const handelClick = () => {
        setIsFollowing(!isFollowing)
    }
    

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatara de oso "
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handelClick} >
                     <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}