import FacebookIcon from "/facebook.svg";

export default function HomePageLinks() {
  return (
    <div className="relative mx-[40px] mt-2 flex shrink-0 grow-0 flex-col items-stretch justify-start gap-4 self-stretch   bg-transparent">
      <button className="flex items-center justify-center text-center">
        <img
          src={FacebookIcon}
          className="relative top-0 m-0 mr-2 inline-block size-4 bg-facebook bg-[-414px_-259px] bg-no-repeat p-0"
        ></img>
        <p className="text-[14px] font-semibold text-ig-facebook-link">
          Facebook ile giriş yap
        </p>
      </button>
      <a
        href="/"
        className="flex items-center justify-center text-[12px] text-ig-facebook-link "
      >
        Şifreni mi unuttun?
      </a>
    </div>
  );
}
