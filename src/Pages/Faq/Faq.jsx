import { useResize } from "../../utils/hooks/useResize";
import Layout from "../../components/Layout/Layout";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import { faq } from "../../content/pagesContent/faqPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import "./Faq.scss";

function Faq() {
  const screenSize = useResize();
  return (
    <Layout title={title.faq} description={description.faq}>
      <section className="faq">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>F.A.Q.</h1>
        <DropDownContainer containerData={faq} size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Faq;