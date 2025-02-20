//Components
import NavbarComponent from "components/NavbarComponent/NavbarComponent";
import HomeBodyComponent from "components/HomeBodyComponent/HomeBodyComponent";
import ScrollTopButtonComponent from "components/ScrollTopButtonComponent/ScrollTopButtonComponent";

const HomeScreen = (props: {}) => { 
  return (
    <>
      <NavbarComponent />
      <HomeBodyComponent />
      <ScrollTopButtonComponent {...props} />
    </>
  );
};

export default HomeScreen;
