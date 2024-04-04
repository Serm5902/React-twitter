import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `${userName}`; // Pasando una función a un componente

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="codigofacilito"
        name="Código Facilito 🐊"
        avatarUser="https://pbs.twimg.com/profile_images/1532011649464516609/vvBkLcUe_400x400.jpg"
        isFollowing
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="freeCodeCampES"
        name="freeCodeCamp.org en Español"
        avatarUser="https://pbs.twimg.com/profile_images/1360453298067701766/QcG5XoYR_400x400.jpg"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="MoureDev"
        name="Brais Moure"
        avatarUser="https://pbs.twimg.com/profile_images/1770770254198640641/MW4GrVo8_400x400.jpg"
        isFollowing
      />
    </section>
  );
}
