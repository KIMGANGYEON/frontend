import img1 from "../../img/project01/1.jpg";
import img2 from "../../img/project01/2.jpg";

import project2img1 from "../../img/project02/img1.jpg";
import project2img2 from "../../img/project02/img2.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const ProjectScreens = () => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (slider.current as HTMLDivElement).offsetWidth,
        },
      });
    }, component);
    // gsap.to(".img_cover", {
    //   y: -50,
    //   duration: 1,
    //   ease: "elastic",
    //   scrollTrigger: {
    //     trigger: ".img_cover",
    //     start: "Left center",
    //     toggleActions: "play none reverse none",
    //     id: "img_cover",
    //   },
    // });
    return () => ctx.revert();
  });
  return (
    <div className="projectscreens" ref={component}>
      <div className="projectscreens_first">
        <div>
          <h1 style={{ marginBottom: 20 }}>프로젝트 1번 : 기본 css</h1>
          <h1 style={{ marginBottom: 20 }}>
            프로젝트 2번 : react node를 활용한 기능 구현
          </h1>
          <h1 style={{ marginBottom: 20 }}>
            사용한 기술: scss express session reactquery
          </h1>
          <h1 style={{ marginBottom: 20 }}>
            현재 하고 있는일:프로젝트 2번을 더 확실하게 알기 위해 redux로
            상태관리 시도중
          </h1>
        </div>
      </div>
      <div className="projectscreens_container" ref={slider}>
        <div className="panel" style={{ backgroundColor: "black" }}>
          <div className="img_filter">
            <img src={img1} alt="" />
            <div className="img_cover">
              <a href="/project01" target="_blank">
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="panel" style={{ backgroundColor: "black" }}>
          <div className="img_filter">
            <img src={project2img1} alt="" />
            <div className="img_cover">
              <a href="/project02" target="_blank">
                <img src={project2img2} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="panel" style={{ backgroundColor: "blue" }}>
          four
        </div>
        <div className="panel" style={{ backgroundColor: "yellowgreen" }}>
          five
        </div>
      </div>
      <div className="last">last</div>
    </div>
  );
};

export default ProjectScreens;
