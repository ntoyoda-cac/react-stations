import { useEffect } from 'react';
import { useState } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = ({ onBreedChange }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchNewBreeds = () => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreeds(Object.keys(data.message)));
    };

    fetchNewBreeds();
  },[]);

  return (
    // ドロップダウン
    // onBreedChangeは、ドロップダウンメニューで選択を変更したときの値
    <BreedsSelect breeds={breeds} onBreedChange={onBreedChange} />
  );
}

export default DogListContainer
