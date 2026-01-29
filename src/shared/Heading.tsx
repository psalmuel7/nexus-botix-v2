interface HeadingProps {
  title: React.ReactNode;
  subHeading?: React.ReactNode;
  className?: string;
  subHeadingClassName?: string;
}

const Heading = ({
  title,
  subHeading,
  className = "",
  subHeadingClassName = "",
}: HeadingProps) => {
  return (
    <div>
      <h1 className={`text-3xl md:text-4xl font-bold ${className}`}>{title}</h1>

      {subHeading && (
        <p
          className={`
            mt-2 
            text-base md:text-base 
            text-gray-600
            max-w-xl
            font-medium
            ${subHeadingClassName}
          `}
        >
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
