//import the various components to render to manage the different types of components
import ContentCardManageContainer from 'components/cards/contentCards/ContentCardManageContainer';

//create an object that maps the different types of components to the components that should be rendered when they are managed
const manageComponentRegistry = {
  ContentCard: ContentCardManageContainer,
  ImageCard: ContentCardManageContainer
}

export default manageComponentRegistry;
