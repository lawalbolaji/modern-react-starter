export function DeleteButtonWithIcon(props: { onClick: () => void }) {
  return (
    <div className="flex cursor-pointer select-none" onClick={props.onClick}>
      <div className="bg-[url('./assets/delete_icon.png')] h-4 w-4 bg-cover hover:bg-[url('./assets/delete_icon_red.png')]"></div>
    </div>
  );
}
