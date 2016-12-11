//import all the different component types/container types that may be presented back in the app config for a user
import ContentCard from 'components/cards/ContentCard';
import ImageCard from 'components/cards/ImageCard';

//for each component that has been created, map the appropriate component/container name to the list of component names that will be retrieved in the app config json for the user
const componentRegistry = {
  ContentCard: ContentCard,
  ImageCard: ImageCard
};

export default componentRegistry;
