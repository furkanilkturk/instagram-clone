import { useRef } from "react";
import { useState } from "react";

export default function HomePageInput({ label }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="m-[0_40px_6px]">
      <div className="border-ig-stroke box-border flex h-[38px] w-[258px] items-center  border border-solid">
        <label className="relative m-0 flex h-9 flex-[1_0_0px] p-0 align-baseline ">
          <span
            className={`text-ig-secondary-text pointer-events-none absolute left-2 right-0 m-0 h-9 origin-left  overflow-hidden text-ellipsis whitespace-nowrap p-0 align-baseline text-[12px] leading-9 transition-all ${isFocused && "bottom-2 text-[10px]"}`}
          >
            {label}
          </span>
          <input
            type="text"
            aria-label={label}
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="75"
            name="username"
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="m-0 overflow-hidden text-ellipsis p-[16px_0_7px_8px] text-left text-[16px] font-normal outline-none"
          />
        </label>
      </div>
    </div>
  );
}
