import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const Skills = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">My Tech Stacks</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="NextJS Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert-0"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  alt="MySQL Logo"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
