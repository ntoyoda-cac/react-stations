export const DogImage = ( props ) => {
  const imageUrl = props.imageUrl || 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';

  return <img src={imageUrl} alt="Dog Image Site" />;
};

export default DogImage
