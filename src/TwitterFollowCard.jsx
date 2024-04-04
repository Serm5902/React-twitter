export function TwitterFollowCard({
  formatUserName,
  avatarUser,
  userName,
  name,
  isFollowing,
}) {
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
          <span className="tw-followCard-info-UserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
