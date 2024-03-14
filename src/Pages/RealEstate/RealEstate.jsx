import { useEffect } from "react";
import ContactsStore from "../../stores/ContactsStore";
import Layout from "../../components/Layout/Layout";
import { useResize } from "../../utils/hooks/useResize";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import OkBlock from "../../components/OkBlock/OkBlock";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import "./RealEstate.scss";
import generateRandomKey from "../../utils/keyGenerator";
import { about, offers, whyWe } from "../../content/pagesContent/realEstatePageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import videoLink from "../../assets/videos/estate-video.mp4";
import previewPhoto from "../../assets/socPreview/enter.jpg";

function RealEstate() {
  const screenSize = useResize();

  useEffect(() => {
    ContactsStore.setContacts("realEstate");
  }, []);
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  // const videoLink ="https://relocationsrb.com/public_html/video/estate-video.mp4";
  const cardsComponent = () => {
    return <DropDownContainer containerData={whyWe} size={screenSize.trakResolutionValue} />;
  };
  const videoComponent = () => {
    const props = {
      size: screenSize.trakResolutionValue,
      videoLink: videoLink,
      videoTitle: "",
    };
    return <BackgroundVideo {...props} />;
  };
  return (
    <Layout
      title={title.realEstate}
      description={description.realEstate}
      page="realEstate"
      ogImage={previewPhoto}
    >
      <section>
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.realEstateTItle}</h1>
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />

        <OkBlock data={offers} size={screenSize.trakResolutionValue} />
        <div className={`horisont-line ${screenSize.trakResolutionValue}`} />
        <EmptyDoubleBlock
          firstComponent={videoComponent}
          secondComponent={cardsComponent}
          firstBlockSize="half"
          secondBlockSize="half"
          size={screenSize.trakResolutionValue}
        />

        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default RealEstate;
