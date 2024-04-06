import PropTypes from "prop-types";
import { useState } from "react";

// *Usando la prop Children
// Esta prop devuelve todo lo que el componente envuelve
// export function TestChildren({children}){
// Aquí va el código
// }

export function TwitterFollowCard({
  avatarUser,
  userName = "unknown",
  name,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  //
  // *El código de arriba desglosado el  useState seria:
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];

  const textButton = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  // Función para cambiar el estado del botón
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={avatarUser}
          alt="Avatar Código Facilito"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-info-UserName">@{userName}</span>
        </div>
      </header>

      <aside className="tw-followCard-Aside">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{textButton}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

// Con propTypes podemos validar los tipos de datos que el componente va a recibir
TwitterFollowCard.propTypes = {
  avatarUser: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};
