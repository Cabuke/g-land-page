import {
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
  IconWeight,
} from "@phosphor-icons/react";
import { useSpring, animated } from "@react-spring/web";
import React, { useState, useEffect } from "react";

const MyCustomHeader = () => {
  const [whatsAppState, setWhatsAppToggle] = useState(true);
  const [linkednlState, setLinkednlToggle] = useState(true);
  const [emailState, setEmailToggle] = useState(true);
  const [weight, setWeight] = useState<IconWeight>("fill");
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5561981525162&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20psicoterapia.%0APoderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es,%20por%20favor%3F";
  const linkedinLink =
    "https://www.linkedin.com/in/giulia-mendon%C3%A7a-502621274/";

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (e) => {
      setWeight(e.matches ? "thin" : "fill");
    };

    // Set initial weight based on the current theme
    handleChange(darkModeMediaQuery);

    // Add event listener to watch for changes
    darkModeMediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener on unmount
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

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
    d: emailState ? 1 : 0,
    config: { duration: 1000 },
  });

  const openWhatsApp = () => {
    setWhatsAppToggle(!whatsAppState);
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 1000);
  };

  const openLinkedin = () => {
    setLinkednlToggle(!linkednlState);
    setTimeout(() => {
      window.open(linkedinLink, "_blank");
    }, 1000);
  };

  const openEmail = () => {
    setEmailToggle(!emailState);
    const email = "gnataliasm@gmail.com";
    const subject = "Informações sobre psicoterapia";
    const body =
      "Olá! Gostaria de saber mais sobre os serviços de psicoterapia.";
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      window.open(emailLink, "_blank");
    }, 1000);
  };

  return (
    <div className="flex ">
      <animated.div
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
          weight={weight}
          className="cursor-pointer"
          onClick={openWhatsApp}
        />
      </animated.div>
      <span className="mx-10">
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
            weight={weight}
            className="cursor-pointer"
            onClick={openLinkedin}
          />
        </animated.div>
      </span>
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
        <Envelope
          size={32}
          color="#FFC107"
          weight={weight}
          className="cursor-pointer"
          onClick={openEmail}
        />
      </animated.div>
    </div>
  );
};

export default MyCustomHeader;
