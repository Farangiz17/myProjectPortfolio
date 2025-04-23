import Footer from "@/components/mainComponents/footer";
import Header from "@/components/mainComponents/header";

const initHeader = <Header />;

const initFooter = <Footer />;

export default function PageContainer({
  header = initHeader,
  footer = initFooter,
  children,
}) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
