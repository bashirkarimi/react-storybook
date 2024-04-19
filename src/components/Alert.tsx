import React, { FC, createElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconName, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export interface AlertProps {
  icon: IconName;
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  alertType: "info" | "success" | "warning" | "error";
  closeable?: boolean;
  onClose?: () => void;
}

const Alert: FC<AlertProps> = ({
  icon,
  title,
  titleLevel = 2,
  text,
  alertType = "info",
  closeable,
}) => {
  const [closed, setClosed] = useState(false);

  const alertTypeClasses = {
    info: "bg-slate-100 border-emerald-600",
    success: "bg-emerald-50 text-emerald-600 border-emerald-600",
    warning: "bg-amber-50 text-amber-600 borer-amber-600",
    error: "bg-orange-50 text-red-600 border-orange-600",
  };
  const alertIconClasses = {
    info: "text-emerald-600",
    success: "text-emerald-600",
    warning: "text-amber-600",
    error: "text-red-600",
  };

  const titleTag = `h${titleLevel}`;

  /**
   * Closes the component by setting the closed state to true.
   * @return {void}
   */
  const handleClose = () => {
    setClosed(true);
  };

  return closed ? (
    <></>
  ) : (
    <div
      className={`text-slate-800 border rounded py-4 px-6 relative flex gap-5 ${alertTypeClasses[alertType]}`}
    >
      <div className={`w-10 h-10 ${alertIconClasses[alertType]}`}>
        <FontAwesomeIcon icon={icon as IconProp} />
      </div>
      <div className={`text-left`}>
        {title && createElement(titleTag, { className: `text-2xl` }, title)}
        <p className={``}>{text}</p>
      </div>
      {closeable && (
        <button
          className={`bg-transparent text-slate-800 flex items-center justify-center absolute p-2 top-2 right-2 p-0 hover:border-0`}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
};

export default Alert;
