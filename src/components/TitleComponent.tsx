import shopifyLogo from "../resources/shopify_logo.png";
const TitleComponent = () => {

  return (
    <div className={"title-container"}>
      <div className={"title-logo-container"}>
        <img src={shopifyLogo} className="title-logo" alt="logo" />
      </div>
      <div className={"title-label"}>The Shoppies</div>

    </div>

  );
};

export default TitleComponent;
