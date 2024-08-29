import { useState } from 'react';
import { DogImage } from './DogImage'
import { DogListContainer } from './DogListContainer'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  const [breedDogUrls,setBreedDogUrls] = useState([]);

  const fetchNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message));
  };

  const handleBreedChange = (breed) => {
    if (breed) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`)
        .then(response => response.json())
        .then(data => setBreedDogUrls(data.message));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
        <h3>このサイトは、犬の画像を表示するサイトです。</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DogImage imageUrl={dogUrl} />
          <button onClick={fetchNewDog} style={{ marginTop: '10px' }}>更新</button>
        </div>
      </div>
      <br />
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <DogListContainer onBreedChange={handleBreedChange} />
      </div>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {breedDogUrls.map((breed) => (
          <DogImage imageUrl={breed} />
        ))}
      </div>
      {/* <DogImage imageUrl={breedDogUrl} /> */}
    </div>
  );
};

export default Description;
