import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

// Esta lista simula un fetch de una APIs
const users = [
  {
    isFollowing: false,
    userName: "codigofacilito",
    name: "Código Facilito 🐊",
    avatarUser: "https://unavatar.io/codigofacilito",
  },
  {
    isFollowing: true,
    userName: "freeCodeCampES",
    name: "freeCodeCamp.org en Español",
    avatarUser: "https://unavatar.io/freeCodeCampES",
  },
  {
    isFollowing: false,
    userName: "MoureDev",
    name: "Brais Moure",
    avatarUser: "https://unavatar.io/MoureDev",
  },
  {
    isFollowing: false,
    userName: "billgates",
    name: "Bill Gates",
    avatarUser: "https://unavatar.io/billgates",
  },
];

export function App() {
  // Usando listas para simular un fetch a APIs
  return (
    <section className="App">
      {users.map(({ isFollowing, userName, name, avatarUser }) => (
        <TwitterFollowCard
          key={userName}
          initialIsFollowing={isFollowing}
          userName={userName}
          name={name}
          avatarUser={avatarUser}
        />
      ))}
    </section>
  );
  //
  // *Pasando una función a un componente
  // const formatUserName = (userName) => `@${userName}`;
  //
  //
  // *Podemos pasar también un elemento
  // const formattedUserName = <span>@serm5902</span>
  //
  //
  // *Forma manual
  // return (
  //   <section className="App">
  //     <TwitterFollowCard
  //       initialIsFollowing
  //       userName="codigofacilito"
  //       name="Código Facilito 🐊"
  //       avatarUser="https://unavatar.io/codigofacilito"
  //     />
  //     <TwitterFollowCard
  //       initialIsFollowing={false}
  //       userName="freeCodeCampES"
  //       name="freeCodeCamp.org en Español"
  //       avatarUser="https://unavatar.io/freeCodeCampES"
  //     />
  //     <TwitterFollowCard
  //       initialIsFollowing
  //       userName="MoureDev"
  //       name="Brais Moure"
  //       avatarUser="https://unavatar.io/MoureDev"
  //     />
  //   </section>
  // );
}
