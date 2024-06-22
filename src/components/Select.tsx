export default function Select(props: {
  title: string;
  name: string;
  options: string[];
  required: boolean;
  span?: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const { title, name, options, required, span, value } = props;
  const handleChange = props.onChange;
  return (
    <div className={`sm:col-span-${span} col-span-1`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
        <select
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          required={required}
          className="shadow border mb-3 bg-white text-gray-700 rounded focus:ring-blue-500 py-2 px-3 focus:border-blue-500 block w-full p-2.5"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
