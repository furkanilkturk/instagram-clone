export default function HomePageFooter() {
  return (
    <footer className="mt-12 flex shrink-0 flex-col text-ig-secondary-text">
      <div className="mb-2 flex w-full items-center justify-center self-auto  ">
        <div className="flex flex-wrap items-center justify-center text-[12px] ">
          <div className="mx-2 mb-3 overflow-visible">Meta</div>
          <div className="mx-2 mb-3 overflow-visible">Hakkında</div>
          <div className="mx-2 mb-3 overflow-visible">Blog</div>
          <div className="mx-2 mb-3 overflow-visible">İş fırsatları</div>
          <div className="mx-2 mb-3 overflow-visible">Yardım</div>
          <div className="mx-2 mb-3 overflow-visible">API</div>
          <div className="mx-2 mb-3 overflow-visible">Gizlilik</div>
          <div className="mx-2 mb-3 overflow-visible">Çerez Ayarları</div>
          <div className="mx-2 mb-3 overflow-visible">Koşullar</div>
          <div className="mx-2 mb-3 overflow-visible">Konumlar</div>
          <div className="mx-2 mb-3 overflow-visible">Instagram Lite</div>
          <div className="mx-2 mb-3 overflow-visible">Threads</div>
          <div className="mx-2 mb-3 overflow-visible">
            Kişi Yükleme ve Hesabı Olmayan Kişiler
          </div>
          <div className="mx-2 mb-3 overflow-visible">Meta Verified</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <span className="relative inline-block cursor-pointer align-top">
          <div className="flex items-center justify-center overflow-visible">
            <span>Türkçe</span>
          </div>
          <select
            value="tr"
            aria-label="Görünen Dili Değiştir"
            className="absolute left-0 top-0  size-full cursor-pointer border border-solid border-[#ccd0d5] p-[2px] text-[12px] "
          >
            <option value="af">Afrikaans</option>
            <option value="ar">العربية</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fa">فارسی</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="he">עברית</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt-br">Português (Brasil)</option>
            <option value="pt">Português (Portugal)</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="th">ภาษาไทย</option>
            <option value="tl">Filipino</option>
            <option value="tr">Türkçe</option>
            <option value="zh-cn">中文(简体)</option>
            <option value="zh-tw">中文(台灣)</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="hr">Hrvatski</option>
            <option value="hu">Magyar</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="si">සිංහල</option>
            <option value="sk">Slovenčina</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ur">اردو</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh-hk">中文(香港)</option>
            <option value="bg">Български</option>
            <option value="fr-ca">Français (Canada)</option>
            <option value="ro">Română</option>
            <option value="sr">Српски</option>
            <option value="uk">Українська</option>
          </select>
        </span>
        <div className="text-[12px]">© 2024 Instagram from Meta</div>
      </div>
    </footer>
  );
}
