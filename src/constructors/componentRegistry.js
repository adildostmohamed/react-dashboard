//import all the different component types/container types that may be presented back in the app config for a user
import ContentCardContainer from 'components/cards/ContentCardContainer';
import ImageCardContainer from 'components/cards/ImageCardContainer';

//for each component that has been created, map the appropriate component/container name to the list of component names that will be retrieved in the app config json for the user
const componentRegistry = {
  ContentCard: ContentCardContainer,
  ImageCard: ImageCardContainer
};

export default componentRegistry;
