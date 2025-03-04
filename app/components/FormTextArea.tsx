interface FormTextAreaProps {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: (event: Event) => void;
}

export default function FormTextArea(props: FormTextAreaProps) {
  return (
    <div>
      <label class="block text-sm font-medium text-gray-300">
        {props.label}
      </label>
      <textarea
        name={props.name}
        rows={props.rows || 4}
        class="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
