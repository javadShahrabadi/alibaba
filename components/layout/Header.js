const Header = (props) => {
  const { imageSrc, alt } = props;
  return (
    <div>
      <img
        src={props.imageSrc}
        alt={props.alt}
        className="object-cover h-[356px]"
      />
    </div>
  );
};

export default Header;
