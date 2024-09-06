import Characters from "./Characters";
import "../css/character.scss";
import Header from "./Header";

const Interface = ({
  simpsons,
  showLiked,
  deleteCharacter,
  searchCharacter,
  likeCharacter,
  restoreCharacters,
  errors,
  sortSimpsons,
}) => {
  return (
    <>
      <Header
        showLiked={showLiked}
        searchCharacter={searchCharacter}
        simpsons={simpsons}
        restoreCharacters={restoreCharacters}
        errors={errors}
        sortSimpsons={sortSimpsons}
      />

      <main>
        <Characters
          deleteCharacter={deleteCharacter}
          likeCharacter={likeCharacter}
          simpsons={simpsons}
        />
      </main>
    </>
  );
};

export default Interface;
