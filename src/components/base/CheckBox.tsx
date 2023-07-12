interface ICustomCheckbox {
  title: string;
  isChecked?: boolean;
}

export function CustomCheckBox({ title, isChecked }: ICustomCheckbox) {
  return (
    <div>
      <label>
        <input
          className="checked:bg-lime-600"
          type="checkbox"
          checked={isChecked}
        />
        <span>{title}</span>
      </label>
    </div>
  );
}
