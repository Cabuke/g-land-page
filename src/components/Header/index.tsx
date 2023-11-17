import { LinkedinLogo, PhoneCall, WhatsappLogo } from "@phosphor-icons/react";
import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

const MyCustomHeader = () => {
  const [whatsAppState, setWhatsAppToggle] = useState(true);
  const [linkednlState, setLinkednlToggle] = useState(true);
  const [phoneState, setPhoneToggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: whatsAppState ? 1 : 0,
    config: { duration: 1000 },
  });
  const { y } = useSpring({
    from: { y: 0 },
    y: linkednlState ? 1 : 0,
    config: { duration: 1000 },
  });
  const { d } = useSpring({
    from: { d: 0 },
    d: phoneState ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <nav className="w-1/5">
      <div className="flex justify-evenly">
        <animated.div
          className="animated"
          style={{
            // opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <WhatsappLogo
            size={32}
            color="#76CA6A"
            className="cursor-pointer "
            onClick={() => setWhatsAppToggle(!whatsAppState)}
          />
        </animated.div>
        <animated.div
          className="animated"
          style={{
            // opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: y.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <LinkedinLogo
            size={32}
            color="#2864AC"
            className="cursor-pointer"
            onClick={() => setLinkednlToggle(!linkednlState)}
          />
        </animated.div>
        <animated.div
          className="animated"
          style={{
            // opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: d.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <PhoneCall
            size={32}
            color="#FFC107"
            className="cursor-pointer"
            onClick={() => setPhoneToggle(!phoneState)}
          />
        </animated.div>
      </div>
    </nav>
  );
};

export default MyCustomHeader;
