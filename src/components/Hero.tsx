import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introExit, setIntroExit] = useState(false);

  useEffect(() => {
    // Start the central light reveal.
    const exitTimer = window.setTimeout(() => {
      setIntroExit(true);
    }, 1500);

    // Remove the intro completely after the reveal.
    const removeTimer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 2250);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* ================= INTRO ================= */}
      {introVisible && (
        <div
          className={`
            fixed
            inset-0
            z-[100]
            overflow-hidden
            bg-[#07181B]
            transition-opacity
            duration-700
            ease-out
            ${
              introExit
                ? 'pointer-events-none opacity-0'
                : 'opacity-100'
            }
          `}
        >
          {/* ================= CENTRAL LIGHT ================= */}

          {/* Large soft atmospheric glow */}
          <div
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-accent/[0.10]
              blur-[90px]
              transition-all
              duration-[1500ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${
                introExit
                  ? 'scale-[4.5] opacity-100'
                  : 'scale-[0.45] opacity-60'
              }
            `}
          />

          {/* Focused central light */}
          <div
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[80px]
              w-[80px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-accent/20
              blur-[35px]
              transition-all
              duration-[1500ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${
                introExit
                  ? 'scale-[5] opacity-0'
                  : 'scale-100 opacity-100'
              }
            `}
          />

          {/* Soft horizontal opening */}
          <div
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[2px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-accent-light
              shadow-[0_0_35px_rgba(92,163,178,0.7)]
              transition-all
              duration-[1500ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${
                introExit
                  ? 'w-[100vw] opacity-0'
                  : 'w-0 opacity-60'
              }
            `}
          />

          {/* Very subtle center haze */}
          <div
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[120px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-accent/[0.035]
              blur-[70px]
              transition-all
              duration-[1500ms]
              ease-out
              ${
                introExit
                  ? 'scale-x-[5] opacity-0'
                  : 'scale-x-100 opacity-100'
              }
            `}
          />
        </div>
      )}

      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft central teal glow */}
        <div
          className="
            absolute
            left-[48%]
            top-[38%]
            h-[520px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-accent/[0.07]
            blur-[150px]
          "
        />

        {/* Soft glow behind the name */}
        <div
          className="
            absolute
            left-[13%]
            top-[35%]
            h-[260px]
            w-[420px]
            rounded-full
            bg-accent/[0.055]
            blur-[120px]
          "
        />

        {/* Very subtle lower glow */}
        <div
          className="
            absolute
            right-[16%]
            bottom-[4%]
            h-[280px]
            w-[420px]
            rounded-full
            bg-accent/[0.045]
            blur-[130px]
          "
        />
      </div>

      {/* ================= MAIN HERO ================= */}
      <div
        className="
          container-wide
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          items-center
          px-6
          py-24
          sm:px-8
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-10
        "
      >
        {/* ================= LEFT ================= */}
        <div className="relative z-20 max-w-2xl">
          {/* Name + vertical glowing line */}
          <div
            className="
              relative
              animate-[heroEnter_0.9s_ease-out_both]
            "
          >
            {/* Vertical glowing line */}
            <span
              className="
                absolute
                left-0
                top-0
                block
                h-[180px]
                w-[2px]
                rounded-full
                bg-gradient-to-b
                from-transparent
                via-accent-light
                to-transparent
                shadow-[0_0_16px_rgba(92,163,178,0.8)]
              "
            />

            {/* Name */}
            <h1
              className="
                pl-[22px]
                whitespace-nowrap
                font-display
                text-5xl
                font-semibold
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Amal Ghazwani
            </h1>

            {/* Tagline */}
            <p
              className="
                ml-[22px]
                mt-4
                max-w-xl
                animate-[heroEnter_0.9s_0.15s_ease-out_both]
                text-xl
                font-normal
                italic
                leading-relaxed
                text-accent-light
                sm:text-2xl
              "
            >
              Finding the story hidden within the data.
            </p>

            {/* Buttons */}
            <div
              className="
                ml-[22px]
                mt-9
                flex
                flex-wrap
                gap-4
                animate-[heroEnter_0.9s_0.3s_ease-out_both]
              "
            >
              {/* Projects */}
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-ink
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(92,163,178,0.3)]
                "
              >
                View My Projects
                <ArrowRight size={17} />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-accent/30
                  bg-accent/5
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-text
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/60
                  hover:bg-accent/10
                "
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT — 3D ANALYTICS ================= */}
        <div
          className="
            relative
            flex
            min-h-[600px]
            items-center
            justify-center
            lg:-mr-24
            animate-[visualEnter_1.1s_0.2s_ease-out_both]
          "
        >
          {/* Large ambient glow */}
          <div
            className="
              absolute
              h-[460px]
              w-[460px]
              rounded-full
              bg-accent/10
              blur-[125px]
            "
          />

          {/* ================= MAIN 3D OBJECT ================= */}
          <div
            className="
              relative
              h-[480px]
              w-[570px]
              [perspective:1200px]
              animate-[sceneFloat_6s_ease-in-out_infinite]
            "
          >
            {/* ================= 3D BARS ================= */}
            <div
              className="
                absolute
                bottom-[118px]
                left-[100px]
                flex
                items-end
                gap-7
              "
            >
              {/* Bar 1 */}
              <div
                className="
                  relative
                  h-[115px]
                  w-[58px]
                  animate-[barRise_1.1s_ease-out_both]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-sm
                    border
                    border-accent/40
                    bg-gradient-to-b
                    from-accent/40
                    to-accent/10
                    shadow-[0_0_30px_rgba(92,163,178,0.12)]
                  "
                />
              </div>

              {/* Bar 2 */}
              <div
                className="
                  relative
                  h-[185px]
                  w-[58px]
                  animate-[barRise_1.2s_0.1s_ease-out_both]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-sm
                    border
                    border-accent/50
                    bg-gradient-to-b
                    from-accent/50
                    to-accent/10
                    shadow-[0_0_35px_rgba(92,163,178,0.16)]
                  "
                />
              </div>

              {/* Bar 3 */}
              <div
                className="
                  relative
                  h-[145px]
                  w-[58px]
                  animate-[barRise_1.3s_0.2s_ease-out_both]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-sm
                    border
                    border-accent/40
                    bg-gradient-to-b
                    from-accent/40
                    to-accent/10
                    shadow-[0_0_30px_rgba(92,163,178,0.12)]
                  "
                />
              </div>

              {/* Bar 4 */}
              <div
                className="
                  relative
                  h-[245px]
                  w-[58px]
                  animate-[barRise_1.4s_0.3s_ease-out_both]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-sm
                    border
                    border-accent/60
                    bg-gradient-to-b
                    from-accent/60
                    to-accent/10
                    shadow-[0_0_50px_rgba(92,163,178,0.22)]
                  "
                />
              </div>

              {/* Bar 5 */}
              <div
                className="
                  relative
                  h-[170px]
                  w-[58px]
                  animate-[barRise_1.5s_0.4s_ease-out_both]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-sm
                    border
                    border-accent/45
                    bg-gradient-to-b
                    from-accent/45
                    to-accent/10
                    shadow-[0_0_30px_rgba(92,163,178,0.14)]
                  "
                />
              </div>
            </div>

            {/* ================= GROWTH LINE ================= */}
            <svg
              className="
                absolute
                left-[65px]
                top-[75px]
                h-[300px]
                w-[470px]
                overflow-visible
              "
              viewBox="0 0 470 300"
              fill="none"
            >
              <path
                d="M20 220 C70 200 92 220 135 175 S205 145 250 165 S320 95 355 115 S410 55 455 35"
                stroke="currentColor"
                strokeWidth="4"
                className="text-accent-light"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="700"
                strokeDashoffset="700"
                style={{
                  animation: 'drawLine 2.6s 0.8s ease-out forwards',
                }}
              />
            </svg>

            {/* ================= FOUR FLOATING POINTS ================= */}

            {/* Point 1 */}
            <span
              className="
                absolute
                left-[8%]
                top-[28%]
                h-2.5
                w-2.5
                rounded-full
                bg-accent-light
                shadow-[0_0_22px_rgba(92,163,178,0.95)]
                animate-[particleFloat_4s_ease-in-out_infinite]
              "
            />

            {/* Point 2 */}
            <span
              className="
                absolute
                right-[4%]
                top-[12%]
                h-2.5
                w-2.5
                rounded-full
                bg-accent
                shadow-[0_0_22px_rgba(92,163,178,0.95)]
                animate-[particleFloat_4.5s_0.8s_ease-in-out_infinite]
              "
            />

            {/* Point 3 */}
            <span
              className="
                absolute
                left-[2%]
                top-[68%]
                h-2
                w-2
                rounded-full
                bg-accent
                shadow-[0_0_18px_rgba(92,163,178,0.9)]
                animate-[particleFloat_4.2s_0.3s_ease-in-out_infinite]
              "
            />

            {/* Point 4 */}
            <span
              className="
                absolute
                left-[58%]
                top-[91%]
                h-2.5
                w-2.5
                rounded-full
                bg-accent-light
                shadow-[0_0_22px_rgba(92,163,178,0.95)]
                animate-[particleFloat_5s_0.6s_ease-in-out_infinite]
              "
            />
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes visualEnter {
          from {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes sceneFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes barRise {
          from {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: bottom;
          }

          to {
            opacity: 1;
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
}