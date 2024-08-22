import InstagramTextIcon from "/instagram-text-icon.png";

import HomePageInput from "../components/Homepage/HomePageInput";
import HomePageButton from "../components/Homepage/HomePageButton";
import HomePageDivider from "../components/Homepage/HomePageDivider";
import HomePageLinks from "../components/Homepage/HomePageLinks";
import HomePageRegister from "../components/Homepage/HomePageRegister";
import HomePageDownload from "../components/Homepage/HomePageDownload";
import HomePageFooter from "../components/Homepage/HomePageFooter";
import HomepageImages from "../components/Homepage/HomepageImages";

export default function Homepage() {
  return (
    <>
      <div className="mt-9 flex justify-center lg:mb-0 lg:ml-auto lg:mr-auto  lg:flex lg:gap-4">
        <HomepageImages />
        <div className="flex flex-col gap-4">
          <div className="lg:flex-grow-1  flex flex-col items-center justify-center pb-4 lg:mt-3 lg:max-w-[350px] lg:border">
            <div className="py-[10px] lg:mb-3 lg:mt-9 ">
              <img
                src={InstagramTextIcon}
                alt="instagram text icon"
                className="h-[51px] w-[171px]"
              />
            </div>
            <div>
              <form
                className="m-0 flex flex-col  p-0 align-baseline"
                id="loginForm"
                method="post"
              >
                <HomePageInput label="Telefon numarası, kullanıcı adı veya e-posta" />
                <HomePageInput label="Şifre" />
                <HomePageButton />
                <HomePageDivider />
                <HomePageLinks />
              </form>
            </div>
          </div>
          <HomePageRegister />
          <HomePageDownload />
        </div>
      </div>
      <HomePageFooter />
    </>
  );
}
