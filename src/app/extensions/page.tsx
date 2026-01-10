import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import Showcase from "@/components/sections/Showcase";

export default function ExtensionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <Showcase />
      </div>
      <Footer />
    </div>
  );
}
