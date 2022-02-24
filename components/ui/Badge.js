function Badge(props) {
  return (
    <small className="bg-[#84E199] text-white font-semibold font-body px-2 rounded-lg">
      {props.innerText}
    </small>
  );
}
export default Badge;
