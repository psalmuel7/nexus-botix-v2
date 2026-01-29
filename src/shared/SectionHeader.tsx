import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <h1 className={`text-2xl font-bold ${titleClassName}`}>
        {title}
      </h1>

      {description && (
        <p
          className={`text-secondary font-medium mt-2 text-md max-w-xl ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
