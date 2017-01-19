//import all the different component types/container types that may be presented back in the app config for a user
import ContentCardContainer from 'components/cards/contentCards/ContentCardContainer';
import ImageCardContainer from 'components/cards/imageCards/ImageCardContainer';
import IframeContainer from 'components/iframes/IframeContainer';
import ScrollableListContainer from 'components/lists/ScrollableListContainer';
import SparklineCardContainer from 'components/cards/sparklinesCards/SparklineCardContainer';
import MapContainer from 'components/maps/MapContainer';
import IframeSelectorContainer from 'components/iframes/IframeSelectorContainer';
//for each component that has been created, map the appropriate component/container name to the list of component names that will be retrieved in the app config json for the user
const displayComponentRegistry = {
  ContentCard: ContentCardContainer,
  ImageCard: ImageCardContainer,
  Iframe: IframeContainer,
  ScrollableList: ScrollableListContainer,
  SparklineCard: SparklineCardContainer,
  GoogleMap: MapContainer,
  IframeSelector: IframeSelectorContainer
};

export default displayComponentRegistry;
