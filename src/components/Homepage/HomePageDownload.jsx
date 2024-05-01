import GooglePlayStore from "/googleplay.png";
import MicrosoftStore from "/microsoft.png";
export default function HomePageDownload() {
  return (
    <div className="flex flex-col gap-2">
      <div className="m-[0px_20px_10px_10px] text-center text-[14px]">
        <span>Uygulamayı indir.</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a
          role="link"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D0C826C21-17C3-444A-ABB7-EBABD37214D7%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
        >
          <img src={GooglePlayStore} className="h-10" />
        </a>
        <a
          role="link"
          href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C1%2C1922%2C922"
        >
          <img src={MicrosoftStore} className="h-10"></img>
        </a>
      </div>
    </div>
  );
}
