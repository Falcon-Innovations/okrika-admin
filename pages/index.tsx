
import {Fragment} from "react";
import {ParallaxProvider} from 'react-scroll-parallax';
import {Hero} from "@/components/home/hero";
import {HowItWorks} from '@/components/home/how-it-works'
import {WhyChooseUs} from "@/components/home/why-choose-us";
import {WhyJoinUs} from "@/components/home/why-join-us";
import {Footer} from "@/components/shared/footer";
import {Faq} from "@/components/home/faq";
import {WhatTalentsSay} from "@/components/home/what-talents-say";

export default function Home() {
  return (
    <Fragment>
      <ParallaxProvider>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <WhyJoinUs />
        <WhatTalentsSay />
        {/* <Faq /> */}
        <Footer />
      </ParallaxProvider>
    </Fragment>
  );
}


