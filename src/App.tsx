import profilePictureImg from "./assets/images/image-avatar.webp";
import illustrationSvg from "./assets/images/illustration-article.svg";

// The designs were created to the following widths:
// - Mobile: 375px
// - Desktop: 1440px
// > 💡 These are just the design sizes.
// > 💡 Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

const App = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen px-6 xsm:p-4">
      <section className="shadow-[9px_9px_#000] min-w-[288px] max-w-[384px] flex flex-col gap-6 p-6 border bg-pure-white border-off-black rounded-[20px]">
        <div>
          <img
            className="rounded-[10px]"
            src={illustrationSvg}
            alt="article illustration"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="px-3 py-1 rounded bg-golden-sand">
            <span className="text-sm font-extrabold text-off-black">
              Learning
            </span>
          </div>
          <p className="text-sm text-off-black">Published 21 Dec 2023</p>

          <h4 className="text-2xl font-extrabold leading-normal cursor-pointer text-off-black hover:text-golden-sand">
            HTML & CSS foundations
          </h4>

          <p className="text-base text-tin">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-8 h-8 rounded-full"
              src={profilePictureImg}
              alt="author profile picture"
            />
          </div>
          <span className="text-sm font-extrabold text-off-black">
            Greg Hooper
          </span>
        </div>
      </section>
    </main>
  );
};

export default App;
