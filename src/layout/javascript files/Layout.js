import Footer from "./Footer";
import Header from "./Header";

//basic layout of all webpages
function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
