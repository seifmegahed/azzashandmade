export default function Input(props: {
  title: string;
  name: string;
  type: string;
  required: boolean;
  span?: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const { title, name, type, required, span, value } = props;
  const handleChange = props.onChange;
  return (
    <div className={`sm:col-span-${span} col-span-1`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
        <input
          id={name}
          className="shadow appearance-none border error:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          required={required}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
}
