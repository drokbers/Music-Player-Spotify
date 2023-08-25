import React from "react";
import { getTrackBackground, Range } from "react-range";

interface CustomRangeProps {
  value: number[];
  step: number;
  min: number;
  max: number;
  onChange: (values: number[]) => void;
  className?: string;
}

const CustomRange: React.FC<CustomRangeProps> = ({
  value,
  step,
  min,
  max,
  onChange,
  className,
}) => {
  return (
    <Range
      values={value}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className={`${className}`}
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-xl self-center"
            style={{
              background: getTrackBackground({
                values: value,
                colors: ["#1db954", "#535353"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-3 w-3 rounded-full bg-white ${
            !isDragged ? "opacity-0" : ""
          } group-hover:opacity-100`}
          style={{
            ...props.style,

            boxShadow: "0px 2px 6px #AAA",
          }}
        ></div>
      )}
    />
  );
};

export default CustomRange;
