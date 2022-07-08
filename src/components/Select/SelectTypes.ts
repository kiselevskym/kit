export default interface SelectTypes {
  selectedLabel: string;
  options: string[];
  onChange: (value: string) => void;
}
