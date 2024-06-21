export default function Select(props: {
  title: string;
  name: string;
  options: string[];
  required: boolean;
}) {
  const { title, name, options, required } = props;
  return (
    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
        <select
          name={name}
          required={required}
          className="shadow border bg-white text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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