import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:pb-32 overflow-hidden scroll-mt-24"
    >
      <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row">
          {/* Left Label */}
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-center md:text-end text-sm">My Tech Stacks</p>
          </div>

          {/* Slider Section */}
          <div className="relative py-6 w-full md:w-[calc(100%-11rem)] overflow-hidden">
            <InfiniteSlider speedOnHover={20} speed={40} gap={40}>
              {[
                "html5/html5-original.svg",
                "css3/css3-original.svg",
                "javascript/javascript-original.svg",
                "react/react-original.svg",
                "nodejs/nodejs-original.svg",
                "php/php-original.svg",
                "nextjs/nextjs-original.svg",
                "bootstrap/bootstrap-original.svg",
                "tailwindcss/tailwindcss-original.svg",
                "mysql/mysql-original-wordmark.svg",
              ].map((icon, index) => (
                <div key={index} className="flex-shrink-0 flex justify-center">
                  <img
                    className="h-10 w-auto mx-6 sm:mx-8 dark:invert-0"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
                    alt={icon.split("/")[0] + " Logo"}
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background"></div>

            {/* Progressive Blurs */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
