//import the various components to render to manage the different types of components
import ContentCardManageContainer from 'components/cards/contentCards/ContentCardManageContainer';
import ImageCardManageContainer from 'components/cards/imageCards/ImageCardManageContainer';

//create an object that maps the different types of components to the components that should be rendered when they are managed
const manageComponentRegistry = {
  ContentCard: ContentCardManageContainer,
  ImageCard: ImageCardManageContainer
}

export default manageComponentRegistry;
