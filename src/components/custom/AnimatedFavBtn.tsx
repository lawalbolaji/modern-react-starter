export function AnimatedFavBtn(props: { isOn: boolean; onClick: (e: React.MouseEvent<HTMLDivElement>) => void }) {
  const { isOn, onClick } = props;
  return (
    <div className="flex">
      <div
        className="px-2 cursor-pointer bg-no-repeat bg-[url('./assets/web_heart_animation.png')] bg-[length:2900%] h-6 w-[50px]"
        style={{ backgroundPosition: `${isOn ? "right" : "left"}` }}
        onClick={onClick}
      ></div>
    </div>
  );
}
