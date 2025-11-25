import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Videos from "@/components/Videos";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Info />
        <Videos />
        <BookingForm />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
