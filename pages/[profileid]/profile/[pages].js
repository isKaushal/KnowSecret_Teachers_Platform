import { useRouter } from "next/router";

// components
import Home from "../../../components/profile/home";
import About from "../../../components/profile/about";
import Education from "../../../components/profile/education";
import Experince from "../../../components/profile/experince";
import Testimonials from "../../../components/profile/testimonial";
import Contact from "../../../components/profile/contact";
import NotFound from "../../../components/profile/notfound";

// components / wrap
import ProfileWrap from "../../../components/profileWrap";
import CenterSection from "../../../components/centersection";

export default function Pages() {
  const router = useRouter();
  const { pages } = router.query;


  if (pages === "home") {
    return (
      <ProfileWrap>
        <CenterSection>
          <Home />
        </CenterSection>
      </ProfileWrap>
    );
  } else if (pages === "about") {
    return (
      <ProfileWrap>
        <CenterSection>
          <About />
        </CenterSection>
      </ProfileWrap>
    );
  } else if (pages === "education") {
    return (
      <ProfileWrap>
        <CenterSection>
          <Education />
        </CenterSection>
      </ProfileWrap>
    );
  } else if (pages === "experince") {
    return (
      <ProfileWrap>
        <CenterSection>
          <Experince />
        </CenterSection>
      </ProfileWrap>
    );
  } else if (pages === "testimonials") {
    return (
      <ProfileWrap>
        <CenterSection>
          <Testimonials />
        </CenterSection>
      </ProfileWrap>
    );
  } else if (pages === "contact") {
    return (
      <ProfileWrap>
        <CenterSection>
          <Contact />
        </CenterSection>
      </ProfileWrap>
    );
  } else {
    return (
      <ProfileWrap>
        <CenterSection>
          <NotFound />
        </CenterSection>
      </ProfileWrap>
    );
  }
}
