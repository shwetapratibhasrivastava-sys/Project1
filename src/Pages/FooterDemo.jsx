import { FooterTapedDesign } from "@/components/ui/FooterTapedDesign";

export default function FooterDemo() {
  return (
    <main className="w-screen min-h-screen mx-auto bg-[#F0F0F0]">
      <div className="min-h-screen flex flex-col justify-center items-center py-10">
        <div className="max-w-4xl w-full px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-base-content">
            Footer Component Demo
          </h1>
          <p className="text-center text-neutral/70 mb-12">
            Scroll down to see the taped design footer component in action
          </p>
          
          <div className="bg-white rounded-lg p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Main Content Area</h2>
            <p className="text-neutral/60 mb-6">
              This is where your main page content would go. The footer will appear below with a beautiful taped design decoration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-light p-4 rounded-lg">
                <p className="font-semibold text-base-content">Feature 1</p>
                <p className="text-sm text-neutral/60">Beautiful design with tape decoration</p>
              </div>
              <div className="bg-accent-light p-4 rounded-lg">
                <p className="font-semibold text-base-content">Feature 2</p>
                <p className="text-sm text-neutral/60">Responsive and mobile-friendly</p>
              </div>
              <div className="bg-secondary-light p-4 rounded-lg">
                <p className="font-semibold text-base-content">Feature 3</p>
                <p className="text-sm text-neutral/60">Easy to customize and extend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <FooterTapedDesign />
    </main>
  );
}
